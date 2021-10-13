
export default function printProcessInfo() {
    
    let obj = {
        cwd: process.cwd(),
        pid:process.pid,
        version:process.version,
        title:process.title,
        platform:process.platform,
        memory: JSON.stringify(process.memoryUsage()),
        argumentos: process.argv,
    }
    return obj;
    
}

