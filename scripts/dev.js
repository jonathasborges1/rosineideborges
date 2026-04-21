const { spawn } = require('child_process')
const os = require('os')
const fs = require('fs')
const path = require('path')

function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return '0.0.0.0'
}

const ip = getLocalIP()
const devDistDir = '.next-dev'

try {
  fs.mkdirSync(path.resolve(process.cwd(), devDistDir), { recursive: true })
  fs.rmSync(path.resolve(process.cwd(), devDistDir, 'trace'), { force: true })
} catch (error) {
  // Falha ao limpar trace não deve impedir o dev server de iniciar.
}

const child = spawn('npx', ['next', 'dev', '-H', ip], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NEXT_DIST_DIR: devDistDir,
  },
})

child.on('exit', (code) => process.exit(code ?? 0))
