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
  return null
}

// Limpa o cache do webpack a cada início para evitar erros de módulo stale
try {
  fs.rmSync(path.resolve(process.cwd(), '.next/cache/webpack'), { recursive: true, force: true })
} catch {}

const ip = getLocalIP()
if (ip) {
  console.log(`  - Network:      http://${ip}:3000`)
}

const child = spawn('npx', ['next', 'dev', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true,
})

child.on('exit', (code) => process.exit(code ?? 0))
