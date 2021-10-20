module.exports = {
    apps:[{
        name: 'app1',
        script: 'dist/src/index.js',
        watch: true,
        instances:4,
        autorestart:true,
        args:'--puerto=8081'
    },
    {
        name:'app2',
        script: 'dist/src/index.js',
        watch:true,
        instances:4,
        autorestart:true,
        args: '--puerto=8082'
    }]
}