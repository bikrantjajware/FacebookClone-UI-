export const users = [
    {
        id: 1,
        name: "Daniel Craig",
        picture : "https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UY1200_CR88,0,630,1200_AL_.jpg"
    },
    {
        id: 2,
        name: "Tom Hanks",
        picture : "https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg"
    },
    {
        id: 3,
        name: "Morgan Freeman",
        picture : "https://upload.wikimedia.org/wikipedia/commons/e/e4/Morgan_Freeman_Deauville_2018.jpg"
    },
    {
        id: 4,
        name: "Michael Caine",
        picture : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F08%2F23%2Fmichael-caine.jpg&q=85"
    }
]

export const posts = [
    {
        id:1,
        user: 1,
        caption: "a good evening",
        media: "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Wishing-You-a-Sunset-Good-Evening-Images.jpg",
        like: [1,2,3,4],
        comment: 5,
        share: 0,
        timestamp: new Date('2021,10,02')
    },
    {
        id:2,
        user: 1,
        caption: "good morning",
        media: "https://www.birthdaywishes.expert/wp-content/uploads/2015/01/friend-good-morning-social.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
        like: [1,2,3],
        comment: 2,
        share: 0,
        timestamp: new Date('2021,11,05')
    },
    {
        id:3,
        user: 2,
        caption: "good night",
        media: "https://www.energids.be/nl/media/mediumimg/18/24tarif-exclusif-nuit.jpg",
        like: [1,2,4],
        comment: 5,
        share: 1,
        timestamp: new Date('2021,07,01')
    }
]


export const chathistory = [
    {
        friend: 2,
        messages: [
            {
                id:1,
                type:"sent",
                message: "Hi Tom",
            },
            {
                id:2,
                type:"received",
                message: "Hello",
            },
            {
                id:3,
                type:"sent",
                message: "Whats up",
            },
            {
                id:4,
                type:"received",
                message: "all good...",
            },
            {
                id:5,
                type:"sent",
                message: "cool",
            },
            {
                id:6,
                type:"received",
                message: ":)",
            }
        ]
    },
    {
        friend:3,
        messages: [
            {
                id:1,
                type:"sent",
                message: "hello Morgan",
            },
            {
                id:2,
                type:"received",
                message: "Hello",
            },
            {
                id:3,
                type:"sent",
                message: "message to 2nd user",
            },
            {
                id:4,
                type:"received",
                message: "all good...",
            },
            {
                id:5,
                type:"sent",
                message: "next message",
            },
            {
                id:6,
                type:"received",
                message: ":)",
            }
        ]
    },
    {
        friend:4,
        messages: []
    }
];