const statusPromise = (promise: Promise<any>) => {
    let status = 'isLoading';
    let result = '';
    let suspender = promise
        .then((res: any) => {
            status = 'success';
            result = res;
        })
        .catch((err: any) => {
            status = 'error';
            result = err;
        });

    return {
        get: () => {
            if (status === 'isLoading') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else {
                return result;
            }
        },
    };
};

export default statusPromise;
