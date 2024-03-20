

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


sleep(20000).then(() => {
    console.log(process.env.MY_CONFIG);
    console.log('é um job', new Date().toISOString());
    process.exit(0);
})

