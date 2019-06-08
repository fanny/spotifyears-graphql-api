const tracks = [
    {
        href: 'https://api.spotify.com/v1/tracks/2TQnqhyIhdeMQGAzRHMYLI',
        id: '2TQnqhyIhdeMQGAzRHMYLI',
        name: 'World Championship Finale 1 - From \'Pitch Perfect 2\' Soundtrack',
        popularity: 3,
        uri: 'spotify:track:2TQnqhyIhdeMQGAzRHMYLI',
        artistId: '3OIHrPeryKmEnrOHCh0x7a'
    },
    {
        href: 'https://api.spotify.com/v1/tracks/4VrWlk8IQxevMvERoX08iC',
        id: '4VrWlk8IQxevMvERoX08iC',
        name: 'Chandelier',
        popularity: 78,
        uri: 'spotify:track:4VrWlk8IQxevMvERoX08iC',
        artistId: '5WUlDfRSoLAfcVSX1WnrxN'
    },
    {
        href : 'https://api.spotify.com/v1/tracks/6e2ufRmytJb3Pz0hWQDvaX',
        id : '6e2ufRmytJb3Pz0hWQDvaX',
        name : 'Woke The F*ck Up - Acoustic',
        popularity : 10,
        uri : 'spotify:track:6e2ufRmytJb3Pz0hWQDvaX',
        artistId: '50JJSqHUf2RQ9xsHs0KMHg'
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6ukvsBzq4d1vBsAUmz7ZVt",
        "id" : "6ukvsBzq4d1vBsAUmz7ZVt",
        "name" : "Daft Punk",
        "popularity" : 62,
        "uri" : "spotify:track:6ukvsBzq4d1vBsAUmz7ZVt"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6yDvhbAqVh1uW3pK1US7Sj",
        "id" : "6yDvhbAqVh1uW3pK1US7Sj",
        "name" : "Antes de Falar Com Deus",
        "popularity" : 0,
        "uri" : "spotify:track:6yDvhbAqVh1uW3pK1US7Sj"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/5z1MUtlK2HPck9gIlMC8tX",
        "id" : "5z1MUtlK2HPck9gIlMC8tX",
        "name" : "Calor Sol e Sal",
        "popularity" : 22,
        "uri" : "spotify:track:5z1MUtlK2HPck9gIlMC8tX"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/64f5bf2jyAkrsucnG9FXot",
        "id" : "64f5bf2jyAkrsucnG9FXot",
        "name" : "Lies",
        "popularity" : 54,
        "uri" : "spotify:track:64f5bf2jyAkrsucnG9FXot"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/0vT0iJzc3gqx2uamyJkqTu",
        "id" : "0vT0iJzc3gqx2uamyJkqTu",
        "name" : "Sê Valente",
        "popularity" : 0,
        "uri" : "spotify:track:0vT0iJzc3gqx2uamyJkqTu"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2YaGZvBfkQ4jiD5cMLIFQV",
        "id" : "2YaGZvBfkQ4jiD5cMLIFQV",
        "name" : "Same Mistake",
        "popularity" : 59,
        "uri" : "spotify:track:2YaGZvBfkQ4jiD5cMLIFQV"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/136aPK6JVBoJe4PVTqdOBP",
        "id" : "136aPK6JVBoJe4PVTqdOBP",
        "name" : "Grandioso Deus",
        "popularity" : 33,
        "uri" : "spotify:track:136aPK6JVBoJe4PVTqdOBP"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6kPkWvv3AXBLFW73Fr6rZG",
        "id" : "6kPkWvv3AXBLFW73Fr6rZG",
        "name" : "Music Box - Bonus Track",
        "popularity" : 32,
        "uri" : "spotify:track:6kPkWvv3AXBLFW73Fr6rZG"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6N2UuvrRusxPjMBqOAjppW",
        "id" : "6N2UuvrRusxPjMBqOAjppW",
        "name" : "Holy - Live",
        "popularity" : 0,
        "uri" : "spotify:track:6N2UuvrRusxPjMBqOAjppW"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6JnxYJwKACudLMiaYMT0qA",
        "id" : "6JnxYJwKACudLMiaYMT0qA",
        "name" : "Minha Felicidade",
        "popularity" : 50,
        "uri" : "spotify:track:6JnxYJwKACudLMiaYMT0qA"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/3vZM2544ETmOCCHuBPZRzm",
        "id" : "3vZM2544ETmOCCHuBPZRzm",
        "name" : "Heathens",
        "popularity" : 64,
        "uri" : "spotify:track:3vZM2544ETmOCCHuBPZRzm"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/44p0C72gL2FbjWbzkUFfTf",
        "id" : "44p0C72gL2FbjWbzkUFfTf",
        "name" : "Bird Set Free",
        "popularity" : 54,
        "uri" : "spotify:track:44p0C72gL2FbjWbzkUFfTf"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2YP9QAFvoFQ9vn9DopfQOW",
        "id" : "2YP9QAFvoFQ9vn9DopfQOW",
        "name" : "Sweat",
        "popularity" : 8,
        "uri" : "spotify:track:2YP9QAFvoFQ9vn9DopfQOW"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/3dAxzv7hkxipbuWJaOMzAl",
        "id" : "3dAxzv7hkxipbuWJaOMzAl",
        "name" : "Burn the Witch",
        "popularity" : 45,
        "uri" : "spotify:track:3dAxzv7hkxipbuWJaOMzAl"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/0FuTWbboY7gpvFyetIu3lF",
        "id" : "0FuTWbboY7gpvFyetIu3lF",
        "name" : "COME BACK HOME - UNPLUGGED VER.",
        "popularity" : 0,
        "uri" : "spotify:track:0FuTWbboY7gpvFyetIu3lF"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/4jCr7BQyrVaYxGN5UaVS1s",
        "id" : "4jCr7BQyrVaYxGN5UaVS1s",
        "name" : "Pool Mashup: Just The Way You Are/Just A Dream",
        "popularity" : 5,
        "uri" : "spotify:track:4jCr7BQyrVaYxGN5UaVS1s"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1JXSL96BufaVkIA6MQEDL7",
        "id" : "1JXSL96BufaVkIA6MQEDL7",
        "name" : "Esperar É Caminhar",
        "popularity" : 0,
        "uri" : "spotify:track:1JXSL96BufaVkIA6MQEDL7"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1WGiezPGli6yE3cm87xyVW",
        "id" : "1WGiezPGli6yE3cm87xyVW",
        "name" : "Gypsy",
        "popularity" : 2,
        "uri" : "spotify:track:1WGiezPGli6yE3cm87xyVW"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/76VIeWBjKpbdopgWSmLSv4",
        "id" : "76VIeWBjKpbdopgWSmLSv4",
        "name" : "Flashlight (Sweet Life Mix) - From \"Pitch Perfect 2\" Soundtrack",
        "popularity" : 14,
        "uri" : "spotify:track:76VIeWBjKpbdopgWSmLSv4"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/7Hxnfdl30YITvCxI6YvHaP",
        "id" : "7Hxnfdl30YITvCxI6YvHaP",
        "name" : "Hero",
        "popularity" : 39,
        "uri" : "spotify:track:7Hxnfdl30YITvCxI6YvHaP"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/01v8HSzbaM0MGBmfxkszGX",
        "id" : "01v8HSzbaM0MGBmfxkszGX",
        "name" : "Aqui Dentro",
        "popularity" : 18,
        "uri" : "spotify:track:01v8HSzbaM0MGBmfxkszGX"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1eqEFKkiEFpAfEqr6Xpt46",
        "id" : "1eqEFKkiEFpAfEqr6Xpt46",
        "name" : "O Velho James Browse Já Dizia - Ao Vivo",
        "popularity" : 6,
        "uri" : "spotify:track:1eqEFKkiEFpAfEqr6Xpt46"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/3VLTDit17REwred56bGQpR",
        "id" : "3VLTDit17REwred56bGQpR",
        "name" : "Meet Me in Mars",
        "popularity" : 18,
        "uri" : "spotify:track:3VLTDit17REwred56bGQpR"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/3iFVjBL7JeVNjnAnnPtxxN",
        "id" : "3iFVjBL7JeVNjnAnnPtxxN",
        "name" : "Oração",
        "popularity" : 34,
        "uri" : "spotify:track:3iFVjBL7JeVNjnAnnPtxxN"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6vI188FTyiQtRlkcevp2Yf",
        "id" : "6vI188FTyiQtRlkcevp2Yf",
        "name" : "Melomaniac",
        "popularity" : 0,
        "uri" : "spotify:track:6vI188FTyiQtRlkcevp2Yf"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/0vg4WnUWvze6pBOJDTq99k",
        "id" : "0vg4WnUWvze6pBOJDTq99k",
        "name" : "You're Beautiful",
        "popularity" : 75,
        "uri" : "spotify:track:0vg4WnUWvze6pBOJDTq99k"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/3voQ4FSnDNKEKuBNeJjAR5",
        "id" : "3voQ4FSnDNKEKuBNeJjAR5",
        "name" : "Malemolencia",
        "popularity" : 57,
        "uri" : "spotify:track:3voQ4FSnDNKEKuBNeJjAR5"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6ROhm6gtkd6SDets7Jz9d6",
        "id" : "6ROhm6gtkd6SDets7Jz9d6",
        "name" : "Não Existe Amor em Sp",
        "popularity" : 8,
        "uri" : "spotify:track:6ROhm6gtkd6SDets7Jz9d6"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2mvmuCtmmrERnm03ULdDye",
        "id" : "2mvmuCtmmrERnm03ULdDye",
        "name" : "Dollars & Cents",
        "popularity" : 43,
        "uri" : "spotify:track:2mvmuCtmmrERnm03ULdDye"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2FEZ8QI6v7gmuLIR12KD2G",
        "id" : "2FEZ8QI6v7gmuLIR12KD2G",
        "name" : "Africa - BACALL Remix",
        "popularity" : 3,
        "uri" : "spotify:track:2FEZ8QI6v7gmuLIR12KD2G"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1yjoYVyZPEg4KFigY56ExT",
        "id" : "1yjoYVyZPEg4KFigY56ExT",
        "name" : "Segunda-Feira",
        "popularity" : 44,
        "uri" : "spotify:track:1yjoYVyZPEg4KFigY56ExT"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1vY98Zl0R7BIHpbGW4moC3",
        "id" : "1vY98Zl0R7BIHpbGW4moC3",
        "name" : "Tarde Livre",
        "popularity" : 25,
        "uri" : "spotify:track:1vY98Zl0R7BIHpbGW4moC3"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2CPqh63wRVscbceKcPxwvv",
        "id" : "2CPqh63wRVscbceKcPxwvv",
        "name" : "The Ocean",
        "popularity" : 74,
        "uri" : "spotify:track:2CPqh63wRVscbceKcPxwvv"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6sFI9u5d9BN6aixR0ttOqL",
        "id" : "6sFI9u5d9BN6aixR0ttOqL",
        "name" : "Florida Kilos",
        "popularity" : 4,
        "uri" : "spotify:track:6sFI9u5d9BN6aixR0ttOqL"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/3I05foFixB2sSZvV5Ppty8",
        "id" : "3I05foFixB2sSZvV5Ppty8",
        "name" : "Blank Space/Stand By Me - Live From Spotify London",
        "popularity" : 12,
        "uri" : "spotify:track:3I05foFixB2sSZvV5Ppty8"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1TZwdXuWX9GkFTttHzugNm",
        "id" : "1TZwdXuWX9GkFTttHzugNm",
        "name" : "Toda Dor É por Enquanto",
        "popularity" : 0,
        "uri" : "spotify:track:1TZwdXuWX9GkFTttHzugNm"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/4MFCXniy7I8tj0GXtf3wgC",
        "id" : "4MFCXniy7I8tj0GXtf3wgC",
        "name" : "Adventure Of A Lifetime",
        "popularity" : 57,
        "uri" : "spotify:track:4MFCXniy7I8tj0GXtf3wgC"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1zVBU0PAj7ZUVmVfG2pgQG",
        "id" : "1zVBU0PAj7ZUVmVfG2pgQG",
        "name" : "Carry You Home",
        "popularity" : 60,
        "uri" : "spotify:track:1zVBU0PAj7ZUVmVfG2pgQG"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/5oGtNA4uAkEIfSXXi7F1RJ",
        "id" : "5oGtNA4uAkEIfSXXi7F1RJ",
        "name" : "Singular",
        "popularity" : 43,
        "uri" : "spotify:track:5oGtNA4uAkEIfSXXi7F1RJ"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2zYrFer4QGSQkk5aUawfHB",
        "id" : "2zYrFer4QGSQkk5aUawfHB",
        "name" : "Hunting Bears",
        "popularity" : 47,
        "uri" : "spotify:track:2zYrFer4QGSQkk5aUawfHB"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1rNuKbtlRfq7DBeLBSzrmz",
        "id" : "1rNuKbtlRfq7DBeLBSzrmz",
        "name" : "Love Yourself, Out of the Woods, Roses - Acoustic Mashup",
        "popularity" : 56,
        "uri" : "spotify:track:1rNuKbtlRfq7DBeLBSzrmz"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/076tTXccdu98igXsVswsmP",
        "id" : "076tTXccdu98igXsVswsmP",
        "name" : "Simple Pleasures",
        "popularity" : 38,
        "uri" : "spotify:track:076tTXccdu98igXsVswsmP"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/1BV0m40U0M4t1SLIsDnwZl",
        "id" : "1BV0m40U0M4t1SLIsDnwZl",
        "name" : "1973",
        "popularity" : 65,
        "uri" : "spotify:track:1BV0m40U0M4t1SLIsDnwZl"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/6d3EX65lLroLUnKPU6cSzV",
        "id" : "6d3EX65lLroLUnKPU6cSzV",
        "name" : "Bridge Over Troubled Water",
        "popularity" : 22,
        "uri" : "spotify:track:6d3EX65lLroLUnKPU6cSzV"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/3DwN8YfAtvJh4c5u8DZPen",
        "id" : "3DwN8YfAtvJh4c5u8DZPen",
        "name" : "Better Than Yourself (Criminal Mind Pt. 2)",
        "popularity" : 51,
        "uri" : "spotify:track:3DwN8YfAtvJh4c5u8DZPen"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2AqmtgKAp7scMFisn3j6ma",
        "id" : "2AqmtgKAp7scMFisn3j6ma",
        "name" : "Hotel Song",
        "popularity" : 41,
        "uri" : "spotify:track:2AqmtgKAp7scMFisn3j6ma"
    },
    {
        "href" : "https://api.spotify.com/v1/tracks/2ASXXba2oQOxNGi0ttXSxY",
        "id" : "2ASXXba2oQOxNGi0ttXSxY",
        "name" : "I Ran (So Far Away)",
        "popularity" : 46,
        "uri" : "spotify:track:2ASXXba2oQOxNGi0ttXSxY"
    }
]

export default tracks