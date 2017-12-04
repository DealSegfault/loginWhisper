import web3 from "./web3"

export const getEtherAdress = () => {
    return new Promise((resolve, reject) => {
        web3.eth.getCoinbase((error, result) => {
            resolve(result)
        })
    })
};

export const signTransaction = () => {
    return new Promise((resolve, reject) => {
        getEtherAdress().then(address => {
            web3.personal.sign(address, "This is 2FA", (error, result) => {
                if (error) {
                    console.log(error)
                }
                console.log(result)
                resolve(result)
            })
        })
    })
}