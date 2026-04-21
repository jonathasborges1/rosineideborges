// Compresses images in /public using sharp.
// Run: node scripts/optimize-images.js
// Replaces originals in-place. Run once before deploy or after adding new images.

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const PUBLIC_DIR = path.join(__dirname, '..', 'public')

const QUALITY = {
  jpeg: 82,
  png: 80,
  webp: 82,
}

const SUPPORTED = ['.jpg', '.jpeg', '.png', '.webp']

async function getFileSizeKB(filePath) {
  const { size } = fs.statSync(filePath)
  return (size / 1024).toFixed(1)
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const before = await getFileSizeKB(filePath)
  const tmpPath = filePath + '.tmp'

  try {
    const instance = sharp(filePath)
    const meta = await instance.metadata()

    if (ext === '.jpg' || ext === '.jpeg') {
      await instance.jpeg({ quality: QUALITY.jpeg, mozjpeg: true }).toFile(tmpPath)
    } else if (ext === '.png') {
      await instance
        .png({ quality: QUALITY.png, compressionLevel: 9, palette: true })
        .toFile(tmpPath)
    } else if (ext === '.webp') {
      await instance.webp({ quality: QUALITY.webp }).toFile(tmpPath)
    }

    const after = await getFileSizeKB(tmpPath)
    const saved = (((before - after) / before) * 100).toFixed(1)

    // Only replace if we actually reduced size
    if (parseFloat(after) < parseFloat(before)) {
      fs.renameSync(tmpPath, filePath)
      console.log(`✓ ${path.basename(filePath)}: ${before}KB → ${after}KB (−${saved}%)`)
    } else {
      fs.unlinkSync(tmpPath)
      console.log(`– ${path.basename(filePath)}: already optimal (${before}KB)`)
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
    console.error(`✗ ${path.basename(filePath)}: ${err.message}`)
  }
}

async function run() {
  const files = fs.readdirSync(PUBLIC_DIR).filter((f) =>
    SUPPORTED.includes(path.extname(f).toLowerCase())
  )

  if (files.length === 0) {
    console.log('No images found in /public.')
    return
  }

  console.log(`Optimizing ${files.length} image(s) in /public...\n`)
  for (const file of files) {
    await optimizeImage(path.join(PUBLIC_DIR, file))
  }
  console.log('\nDone.')
}

run()
