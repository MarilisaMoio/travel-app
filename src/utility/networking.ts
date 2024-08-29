export const retrieveData = async (url: string) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data
        } catch (err) { 
            throw {
                isError: true,
                message: "Error in retrieving data",
                errorDetails: (err as Error).message
            }
        }
    }

export const newData = async (url: string, body: object ) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            return data
        } catch (err) {
            throw {
                isError: true,
                message: "Data are not correctly saved in the db",
                errorDetails: (err as Error).message
            };
        }
    }