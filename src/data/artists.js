const artists = [
    {
        href: 'https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN',
        id: '5WUlDfRSoLAfcVSX1WnrxN',
        name: 'Sia',
        uri: 'spotify:artist:5WUlDfRSoLAfcVSX1WnrxN'
    },
    {
        href: 'https://api.spotify.com/v1/artists/3OIHrPeryKmEnrOHCh0x7a',
        id: '3OIHrPeryKmEnrOHCh0x7a',
        name: 'Das Sound Machine',
        uri: 'spotify:artist:3OIHrPeryKmEnrOHCh0x7a'
    },
    {
        href: 'https://api.spotify.com/v1/artists/50JJSqHUf2RQ9xsHs0KMHg',
        id: '50JJSqHUf2RQ9xsHs0KMHg',
        name: 'Jon Bellion',
        uri: 'spotify:artist:50JJSqHUf2RQ9xsHs0KMHg'
    },
    {
        href: 'https://api.spotify.com/v1/artists/26AHtbjWKiwYzsoGoUZq53',
        id: '26AHtbjWKiwYzsoGoUZq53',
        name: 'Pentatonix',
        uri: 'spotify:artist:26AHtbjWKiwYzsoGoUZq53'
    },
    {
        href: 'https://api.spotify.com/v1/artists/5PmlW3MANz3vrh2hrDnbhR',
        id: '5PmlW3MANz3vrh2hrDnbhR',
        name: 'Marcos Almeida',
        uri: 'spotify:artist:5PmlW3MANz3vrh2hrDnbhR'
    },
    {
        href: 'https://api.spotify.com/v1/artists/2MRNPdxSIFA9NJXNB0TTtc',
        id: '2MRNPdxSIFA9NJXNB0TTtc',
        name: 'Bruna Mendez',
        uri: 'spotify:artist:2MRNPdxSIFA9NJXNB0TTtc'
    },
    {
        href: 'https://api.spotify.com/v1/artists/6CwfuxIqcltXDGjfZsMd9A',
        id: '6CwfuxIqcltXDGjfZsMd9A',
        name: 'Marina',
        uri: 'spotify:artist:6CwfuxIqcltXDGjfZsMd9A'
    },
    {
        href: 'https://api.spotify.com/v1/artists/7KMqksf0UMdyA0UCf4R3ux',
        id: '7KMqksf0UMdyA0UCf4R3ux',
        name: 'James Blunt',
        uri: 'spotify:artist:7KMqksf0UMdyA0UCf4R3ux'
    },
    {
        href: 'https://api.spotify.com/v1/artists/3G4ZvKqnYaB76ZeANjvn6B',
        id: '3G4ZvKqnYaB76ZeANjvn6B',
        name: 'Purples',
        uri: 'spotify:artist:3G4ZvKqnYaB76ZeANjvn6B'
    },
    {
        href: 'https://api.spotify.com/v1/artists/3z6Gk257P9jNcZbBXJNX5i',
        id: '3z6Gk257P9jNcZbBXJNX5i',
        name: 'Regina Spektor',
        uri: 'spotify:artist:3z6Gk257P9jNcZbBXJNX5i'
    },
    {
        href: 'https://api.spotify.com/v1/artists/0Onvkz1Nbs4wHXXUwOIGk8',
        id: '0Onvkz1Nbs4wHXXUwOIGk8',
        name: 'Jesus Culture',
        uri: 'spotify:artist:0Onvkz1Nbs4wHXXUwOIGk8'
    },
    {
        href: 'https://api.spotify.com/v1/artists/5CC2At3k0Xnyc5s9yHdyax',
        id: '5CC2At3k0Xnyc5s9yHdyax',
        name: 'Roberta Campos',
        uri: 'spotify:artist:5CC2At3k0Xnyc5s9yHdyax'
    },
    {
        href: 'https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx',
        id: '3YQKmKGau1PzlVlkL1iodx',
        name: 'Twenty One Pilots',
        uri: 'spotify:artist:3YQKmKGau1PzlVlkL1iodx'
    },
    {
        href: 'https://api.spotify.com/v1/artists/2KjAo6wVc9d2WcxdxSArpV',
        id: '2KjAo6wVc9d2WcxdxSArpV',
        name: 'RY X',
        uri: 'spotify:artist:2KjAo6wVc9d2WcxdxSArpV'
    },
    {
        href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
        id: '4Z8W4fKeB5YxbusRsdQVPb',
        name: 'Radiohead',
        uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb'
    },
    {
        href: 'https://api.spotify.com/v1/artists/1l0mKo96Jh9HVYONcRl3Yp',
        id: '1l0mKo96Jh9HVYONcRl3Yp',
        name: '2NE1',
        uri: 'spotify:artist:1l0mKo96Jh9HVYONcRl3Yp'
    },
    {
        href: 'https://api.spotify.com/v1/artists/2BaKphge9AdjZIxQqv7WoQ',
        id: '2BaKphge9AdjZIxQqv7WoQ',
        name: 'The Barden Bellas',
        uri: 'spotify:artist:2BaKphge9AdjZIxQqv7WoQ'
    },
    {
        href: 'https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms',
        id: '1HY2Jd0NmPuamShAr6KMms',
        name: 'Lady Gaga',
        uri: 'spotify:artist:1HY2Jd0NmPuamShAr6KMms'
    },
    {
        href: 'https://api.spotify.com/v1/artists/5p7f24Rk5HkUZsaS3BLG5F',
        id: '5p7f24Rk5HkUZsaS3BLG5F',
        name: 'Hailee Steinfeld',
        uri: 'spotify:artist:5p7f24Rk5HkUZsaS3BLG5F'
    },
    {
        href: 'https://api.spotify.com/v1/artists/0rbot8VBGRQ5ac2OQDvqd7',
        id: '0rbot8VBGRQ5ac2OQDvqd7',
        name: 'Renato Vianna',
        uri: 'spotify:artist:0rbot8VBGRQ5ac2OQDvqd7'
    },
    {
        href: 'https://api.spotify.com/v1/artists/7dLXGClVfy10Ug57dZE0iC',
        id: '7dLXGClVfy10Ug57dZE0iC',
        name: 'Mundo Livre S/A',
        uri: 'spotify:artist:7dLXGClVfy10Ug57dZE0iC'
    },
    {
        href: 'https://api.spotify.com/v1/artists/0tyT2HjWIofcyvHL6uIVmV',
        id: '0tyT2HjWIofcyvHL6uIVmV',
        name: 'Dolphinkids',
        uri: 'spotify:artist:0tyT2HjWIofcyvHL6uIVmV'
    },
    {
        href: 'https://api.spotify.com/v1/artists/08EbIRcugh37mEQL2UXtHj',
        id: '08EbIRcugh37mEQL2UXtHj',
        name: 'Ariadna Castellanos',
        uri: 'spotify:artist:08EbIRcugh37mEQL2UXtHj'
    },
    {
        href: 'https://api.spotify.com/v1/artists/2eFVsaX3yHLPeWpiqvmeFn',
        id: '2eFVsaX3yHLPeWpiqvmeFn',
        name: 'Céu',
        uri: 'spotify:artist:2eFVsaX3yHLPeWpiqvmeFn'
    },
    {
        href: 'https://api.spotify.com/v1/artists/37ZflmHTdxkSLQuT8w9NBs',
        id: '37ZflmHTdxkSLQuT8w9NBs',
        name: 'Criolo',
        uri: 'spotify:artist:37ZflmHTdxkSLQuT8w9NBs'
    },
    {
        href: 'https://api.spotify.com/v1/artists/3Fv735VHm9CTIHUClsVIcR',
        id: '3Fv735VHm9CTIHUClsVIcR',
        name: 'Malo',
        uri: 'spotify:artist:3Fv735VHm9CTIHUClsVIcR'
    },
    {
        href: 'https://api.spotify.com/v1/artists/3IokbxGxDtjuk6wPdisQ6o',
        id: '3IokbxGxDtjuk6wPdisQ6o',
        name: 'Esteban Tavares',
        uri: 'spotify:artist:3IokbxGxDtjuk6wPdisQ6o'
    },
    {
        href: 'https://api.spotify.com/v1/artists/093ybF4c81CndQe6qWtc8S',
        id: '093ybF4c81CndQe6qWtc8S',
        name: 'Selvagens à Procura de Lei',
        uri: 'spotify:artist:093ybF4c81CndQe6qWtc8S'
    },
    {
        href: 'https://api.spotify.com/v1/artists/6lB8vOoI4DRrrVxXwuV19c',
        id: '6lB8vOoI4DRrrVxXwuV19c',
        name: 'Mike Perry',
        uri: 'spotify:artist:6lB8vOoI4DRrrVxXwuV19c'
    },
    {
        href: 'https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa',
        id: '00FQb4jTyendYWaN8pK0wa',
        name: 'Lana Del Rey',
        uri: 'spotify:artist:00FQb4jTyendYWaN8pK0wa'
    },
    {
        href: 'https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q',
        id: '53XhwfbYqKCa1cC15pYq2q',
        name: 'Imagine Dragons',
        uri: 'spotify:artist:53XhwfbYqKCa1cC15pYq2q'
    },
    {
        href: 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU',
        id: '4gzpq5DPGxSnKTe4SA8HAU',
        name: 'Coldplay',
        uri: 'spotify:artist:4gzpq5DPGxSnKTe4SA8HAU'
    },
    {
        href: 'https://api.spotify.com/v1/artists/1sPg5EHuQXTMElpZ4iUgXe',
        id: '1sPg5EHuQXTMElpZ4iUgXe',
        name: 'ANAVITÓRIA',
        uri: 'spotify:artist:1sPg5EHuQXTMElpZ4iUgXe'
    },
    {
        href: 'https://api.spotify.com/v1/artists/09kCHZp9iFO2FJNb9lR6G5',
        id: '09kCHZp9iFO2FJNb9lR6G5',
        name: 'Megan Davies',
        uri: 'spotify:artist:09kCHZp9iFO2FJNb9lR6G5'
    },
    {
        href: 'https://api.spotify.com/v1/artists/4hf3caW9H8uFwwbv5pFjcg',
        id: '4hf3caW9H8uFwwbv5pFjcg',
        name: 'Jake Bugg',
        uri: 'spotify:artist:4hf3caW9H8uFwwbv5pFjcg'
    },
    {
        href: 'https://api.spotify.com/v1/artists/4a9uYinJyK6Kt66n4VdtJY',
        id: '4a9uYinJyK6Kt66n4VdtJY',
        name: 'Emmerson Nogueira',
        uri: 'spotify:artist:4a9uYinJyK6Kt66n4VdtJY'
    },
    {
        href: 'https://api.spotify.com/v1/artists/25u4wHJWxCA9vO0CzxAbK7',
        id: '25u4wHJWxCA9vO0CzxAbK7',
        name: 'Lukas Graham',
        uri: 'spotify:artist:25u4wHJWxCA9vO0CzxAbK7'
    },
    {
        href: 'https://api.spotify.com/v1/artists/0uAjBatvB4ubpd4kCfjmNt',
        id: '0uAjBatvB4ubpd4kCfjmNt',
        name: 'A Flock Of Seagulls',
        uri: 'spotify:artist:0uAjBatvB4ubpd4kCfjmNt'
    }

]

export default artists