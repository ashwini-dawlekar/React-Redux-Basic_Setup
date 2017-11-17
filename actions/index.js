export const HELLO_WORLD = 'HELLO_WORLD'

export const helloWorld = () => {
    console.log('helloWorld actions')
    return {
        type: HELLO_WORLD,
        payload:[
            {
                "id": 1,
                "name": "User1",
                "city":"City1",
            },
            {
                "id": 2,
                "name": "User2",
                "city":"City2",

            },
            {
                "id": 3,
                "name": "User3",
                "city":"City3",

            },
            {
                "id": 4,
                "name": "User4",
                "city":"City4",

            }
        ]
    }
}