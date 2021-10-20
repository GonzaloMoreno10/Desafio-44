import { PORT } from '..';
const numCpus = require('os').cpus().length;

console.log(PORT)
export default function printProcessInfo() {
    
    let obj = {
        cwd: process.cwd(),
        pid:process.pid,
        version:process.version,
        title:process.title,
        platform:process.platform,
        procesadores: numCpus,
        puerto:PORT,
        memory: JSON.stringify(process.memoryUsage()),
    }
    return obj;
    
}

