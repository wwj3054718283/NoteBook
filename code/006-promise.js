new Promise((resolve, reject) => {
    console.log('启动任务1');
    setTimeout(() => {
        if (Math.random() > 0.2) {
            resolve('任务1成功')
        } else {
            reject('任务1失败')
        }
    }, 200);
}).then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
        console.log('启动任务2');
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('任务2成功')
            } else {
                reject('任务2失败')
            }
        }, 100);
    })
}).then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
        console.log('启动任务3');
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('任务3成功')
            } else {
                reject('任务3失败')
            }
        }, 10);
    })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});