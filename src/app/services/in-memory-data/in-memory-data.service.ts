// tslint:disable
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../../models/movie';
import { Star } from '../../models/star';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const movies = this.createMovieDb();
        const stars = this.createStarDb();
        const db = { movies, stars };
        return db;
    }

    createMovieDb(): Movie[] {
        const movies: Movie[] = [
            {
                id: 1,
                title: 'Dark Phoenix',
                year: 2019,
                rated: 'PG-13',
                released: '05 Jun 2019',
                runtime: '113 min',
                genre: 'Action, Adventure, Sci-Fi',
                director: 'Simon Kinberg',
                writer: `John Byrne (story "The Dark Phoenix Saga"), Chris Claremont (story "The Dark Phoenix Saga"),
                         Dave Cockrum (story "The Dark Phoenix Saga"), Simon Kinberg, Jack Kirby (comic book created by),
                         Stan Lee (comic book created by)`,
                actors:
                    [
                        {
                            id: 1,
                            name: 'Sophie Turner',
                            birthDate: '21 Feb 1996',
                            birthPlace: 'Northampton, Northamptonshire, England, UK',
                            bio: `Sophie Belinda Jonas (née Turner; born February 21, 1996) is an English actress.
                            Turner made her professional acting debut as Sansa Stark on the HBO fantasy television
                            series Game of Thrones (2011) (2011-2019), which brought her international recognition and critical praise.
                            For her performance, she has received four nominations for Screen Actors`,
                            image: 'https://m.media-amazon.com/images/M/MV5BMjM5Mjg4MDQ3MF5BMl5BanBnXkFtZTgwMDA2MjkxMjI@._V1_.jpg',

                        },
                        {
                            id: 2,
                            name: 'Jennifer Lawrence',
                            birthDate: '15 August 1990',
                            birthPlace: 'Louisville, Kentucky, USA',
                            bio: `Was the highest-paid actress in the world in 2015 and 2016.
                             With her films grossing over $5.5 billion worldwide,
                             Jennifer Lawrence is often cited as the most successful actor of her generation`,
                            image: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg',

                        }
                    ],
                plot: `Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix.
                 Now the X-Men will have to decide if the life of a team member is worth more than all the people living
                 in the world.`,
                language: 'English',
                country: 'USA',
                awards: 'N/A',
                poster: 'https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_SX300.jpg',
                ratings: '7.9',
                metaScore: 'N/A',
                imdbRating: 'N/A',
                imdbVotes: 'N/A',
                imdbId: 'tt6565702',
                type: 'movie',
                dvd: 'N/A',
                boxOffice: 'N/A',
                production: '20th Century Fox',
                website: 'https://movies.disney.com/dark-phoenix',
                response: true
            },
            {
                id: 2,
                title: 'Passengers',
                year: 2016,
                rated: 'PG-13',
                released: '21 Dec 2016',
                runtime: '116 min',
                genre: 'Drama, Romance, Sci-Fi, Thriller',
                director: 'Morten Tyldum',
                writer: 'Jon Spaihts',
                actors:
                    [
                        {
                            id: 2,
                            name: 'Jennifer Lawrence',
                            birthDate: '15 August 1990',
                            birthPlace: 'Louisville, Kentucky, USA',
                            bio: `Was the highest-paid actress in the world in 2015 and 2016.
                            With her films grossing over $5.5 billion worldwide,
                            Jennifer Lawrence is often cited as the most successful actor of her generation`,
                            image: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg',

                        },
                        {
                            id: 3,
                            name: 'Chris Pratt',
                            birthDate: '21 JUn 1979',
                            birthPlace: 'Virginia, Minnesota, USA',
                            bio: `Christopher Michael Pratt is an American film and television actor.
                            He came to prominence for his small-screen roles, including Bright Abbott in Everwood (2002)`,
                            image: 'https://media.vanityfair.com/photos/585c0eb32fcfde736cf462a0/master/w_1600%2Cc_limit/chris-pratt-february-vf-02-17-02.jpg',

                        }
                    ],
                plot: `The spaceship, Starship Avalon, in its 120-year voyage to a distant colony planet known as the "Homestead Colony"
                and transporting 5,258 people has a malfunction in one of its sleep chambers.
                As a result one hibernation pod opens prematurely and the one person that awakes,
                Jim Preston (Chris Pratt) is stranded on the spaceship, still 90 years from his destination.`,
                language: 'English, Spanish, Japanese, French',
                country: 'USA, Australia',
                awards: 'Nominated for 2 Oscars. Another 1 win & 9 nominations.',
                poster: 'https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                ratings: '5.5',
                metaScore: '41',
                imdbRating: '7.0',
                imdbVotes: '309,316',
                imdbId: 'tt1355644',
                type: 'movie',
                dvd: '14 Mar 2017',
                boxOffice: '$100,014,092',
                production: 'Columbia Pictures',
                website: 'http://www.passengersmovie.com/',
                response: true
            },
            {
                id: 3,
                title: 'Mother!',
                year: 2017,
                rated: 'R',
                released: '15 Sep 2017',
                runtime: '121 min',
                genre: 'Drama, Horror, Mystery',
                director: 'Darren Aronofsky',
                writer: 'Darren Aronofsky',
                actors: [
                    {
                        id: 2,
                        name: 'Jennifer Lawrence',
                        birthDate: '15 August 1990',
                        birthPlace: 'Louisville, Kentucky, USA',
                        bio: `Was the highest-paid actress in the world in 2015 and 2016.
                        With her films grossing over $5.5 billion worldwide,
                        Jennifer Lawrence is often cited as the most successful actor of her generation`,
                        image: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg',

                    }
                ],

                plot: 'A couple\'s relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.',
                language: 'English',
                country: 'USA',
                awards: '5 wins & 30 nominations.',
                poster: 'https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_SX300.jpg',
                ratings: '7.2',
                metaScore: '75',
                imdbRating: '6.6',
                imdbVotes: '154,502',
                imdbId: 'tt5109784',
                type: 'movie',
                dvd: '19 Dec 2017',
                boxOffice: '$17,297,289',
                production: 'Paramount Pictures',
                website: 'http://www.mothermovie.com',
                response: true
            },
            {
                id: 4,
                title: 'Father!',
                year: 2017,
                rated: 'R',
                released: '15 Sep 2017',
                runtime: '121 min',
                genre: 'Drama, Horror, Mystery',
                director: 'Darren Aronofsky',
                writer: 'Darren Aronofsky',
                actors: [
                    {
                        id: 2,
                        name: 'Jennifer Lawrence',
                        birthDate: '15 August 1990',
                        birthPlace: 'Louisville, Kentucky, USA',
                        bio: `Was the highest-paid actress in the world in 2015 and 2016.
                        With her films grossing over $5.5 billion worldwide,
                        Jennifer Lawrence is often cited as the most successful actor of her generation`,
                        image: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg',

                    },
                    {
                        id: 3,
                        name: 'Chris Pratt',
                        birthDate: '21 JUn 1979',
                        birthPlace: 'Virginia, Minnesota, USA',
                        bio: `Christopher Michael Pratt is an American film and television actor.
                        He came to prominence for his small-screen roles, including Bright Abbott in Everwood (2002)`,
                        image: 'https://media.vanityfair.com/photos/585c0eb32fcfde736cf462a0/master/w_1600%2Cc_limit/chris-pratt-february-vf-02-17-02.jpg',

                    }
                ],

                plot: 'A couple\'s relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.',
                language: 'English',
                country: 'USA',
                awards: '5 wins & 30 nominations.',
                poster: 'https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_SX300.jpg',
                ratings: '7.2',
                metaScore: '75',
                imdbRating: '6.6',
                imdbVotes: '154,502',
                imdbId: 'tt5109784',
                type: 'movie',
                dvd: '19 Dec 2017',
                boxOffice: '$17,297,289',
                production: 'Paramount Pictures',
                website: 'http://www.mothermovie.com',
                response: true
            }
        ];
        return movies;
    }

    createStarDb(): Star[] {
        const stars: Star[] = [
            {
                id: 1,
                name: 'Sophie Turner',
                birthDate: '21 Feb 1996',
                birthPlace: 'Northampton, Northamptonshire, England, UK',
                bio: 'Sophie Belinda Jonas (née Turner; born February 21, 1996) is an English actress. Turner made her professional acting debut as Sansa Stark on the HBO fantasy television series Game of Thrones (2011) (2011-2019), which brought her international recognition and critical praise. For her performance, she has received four nominations for Screen Actors',
                image: 'https://m.media-amazon.com/images/M/MV5BMjM5Mjg4MDQ3MF5BMl5BanBnXkFtZTgwMDA2MjkxMjI@._V1_.jpg',
                movies: [
                    {
                        id: 1,
                        title: 'Dark Phoenix',
                        year: 2019,
                        rated: 'PG-13',
                        released: '05 Jun 2019',
                        runtime: '113 min',
                        genre: 'Action, Adventure, Sci-Fi',
                        director: 'Simon Kinberg',
                        writer: 'John Byrne (story "The Dark Phoenix Saga"), Chris Claremont (story "The Dark Phoenix Saga"), Dave Cockrum (story "The Dark Phoenix Saga"), Simon Kinberg, Jack Kirby (comic book created by), Stan Lee (comic book created by)',
                        plot: 'Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world.',
                        language: 'English',
                        country: 'USA',
                        awards: 'N/A',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_SX300.jpg',
                        ratings: '7.9',
                        metaScore: 'N/A',
                        imdbRating: 'N/A',
                        imdbVotes: 'N/A',
                        imdbId: 'tt6565702',
                        type: 'movie',
                        dvd: 'N/A',
                        boxOffice: 'N/A',
                        production: '20th Century Fox',
                        website: 'https://movies.disney.com/dark-phoenix',
                        response: true
                    },
                ]
            },
            {
                id: 2,
                name: 'Jennifer Lawrence',
                birthDate: '15 August 1990',
                birthPlace: 'Louisville, Kentucky, USA',
                bio: 'Was the highest-paid actress in the world in 2015 and 2016. With her films grossing over $5.5 billion worldwide, Jennifer Lawrence is often cited as the most successful actor of her generation',
                image: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg',
                movies: [
                    {
                        id: 1,
                        title: 'Dark Phoenix',
                        year: 2019,
                        rated: 'PG-13',
                        released: '05 Jun 2019',
                        runtime: '113 min',
                        genre: 'Action, Adventure, Sci-Fi',
                        director: 'Simon Kinberg',
                        writer: 'John Byrne (story "The Dark Phoenix Saga"), Chris Claremont (story "The Dark Phoenix Saga"), Dave Cockrum (story "The Dark Phoenix Saga"), Simon Kinberg, Jack Kirby (comic book created by), Stan Lee (comic book created by)',
                        plot: 'Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world.',
                        language: 'English',
                        country: 'USA',
                        awards: 'N/A',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_SX300.jpg',
                        ratings: '7.9',
                        metaScore: 'N/A',
                        imdbRating: 'N/A',
                        imdbVotes: 'N/A',
                        imdbId: 'tt6565702',
                        type: 'movie',
                        dvd: 'N/A',
                        boxOffice: 'N/A',
                        production: '20th Century Fox',
                        website: 'https://movies.disney.com/dark-phoenix',
                        response: true
                    },
                    {
                        id: 2,
                        title: 'Passengers',
                        year: 2016,
                        rated: 'PG-13',
                        released: '21 Dec 2016',
                        runtime: '116 min',
                        genre: 'Drama, Romance, Sci-Fi, Thriller',
                        director: 'Morten Tyldum',
                        writer: 'Jon Spaihts',
                        plot: 'The spaceship, Starship Avalon, in its 120-year voyage to a distant colony planet known as the "Homestead Colony" and transporting 5,258 people has a malfunction in one of its sleep chambers. As a result one hibernation pod opens prematurely and the one person that awakes, Jim Preston (Chris Pratt) is stranded on the spaceship, still 90 years from his destination.',
                        language: 'English, Spanish, Japanese, French',
                        country: 'USA, Australia',
                        awards: 'Nominated for 2 Oscars. Another 1 win & 9 nominations.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                        ratings: '5.5',
                        metaScore: '41',
                        imdbRating: '7.0',
                        imdbVotes: '309,316',
                        imdbId: 'tt1355644',
                        type: 'movie',
                        dvd: '14 Mar 2017',
                        boxOffice: '$100,014,092',
                        production: 'Columbia Pictures',
                        website: 'http://www.passengersmovie.com/',
                        response: true
                    },
                    {
                        id: 3,
                        title: 'Mother!',
                        year: 2017,
                        rated: 'R',
                        released: '15 Sep 2017',
                        runtime: '121 min',
                        genre: 'Drama, Horror, Mystery',
                        director: 'Darren Aronofsky',
                        writer: 'Darren Aronofsky',
                        plot: 'A couple\'s relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.',
                        language: 'English',
                        country: 'USA',
                        awards: '5 wins & 30 nominations.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_SX300.jpg',
                        ratings: '7.2',
                        metaScore: '75',
                        imdbRating: '6.6',
                        imdbVotes: '154,502',
                        imdbId: 'tt5109784',
                        type: 'movie',
                        dvd: '19 Dec 2017',
                        boxOffice: '$17,297,289',
                        production: 'Paramount Pictures',
                        website: 'http://www.mothermovie.com',
                        response: true
                    },
                    {
                        id: 4,
                        title: 'Father!',
                        year: 2017,
                        rated: 'R',
                        released: '15 Sep 2017',
                        runtime: '121 min',
                        genre: 'Drama, Horror, Mystery',
                        director: 'Darren Aronofsky',
                        writer: 'Darren Aronofsky',
                        plot: 'A couple\'s relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.',
                        language: 'English',
                        country: 'USA',
                        awards: '5 wins & 30 nominations.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_SX300.jpg',
                        ratings: '7.2',
                        metaScore: '75',
                        imdbRating: '6.6',
                        imdbVotes: '154,502',
                        imdbId: 'tt5109784',
                        type: 'movie',
                        dvd: '19 Dec 2017',
                        boxOffice: '$17,297,289',
                        production: 'Paramount Pictures',
                        website: 'http://www.mothermovie.com',
                        response: true
                    }
                ]
            },
            {
                id: 3,
                name: 'Chris Pratt',
                birthDate: '21 JUn 1979',
                birthPlace: 'Virginia, Minnesota, USA',
                bio: 'Christopher Michael Pratt is an American film and television actor. He came to prominence for his small-screen roles, including Bright Abbott in Everwood (2002)',
                image: 'https://media.vanityfair.com/photos/585c0eb32fcfde736cf462a0/master/w_1600%2Cc_limit/chris-pratt-february-vf-02-17-02.jpg',
                movies: [
                    {
                        id: 2,
                        title: 'Passengers',
                        year: 2016,
                        rated: 'PG-13',
                        released: '21 Dec 2016',
                        runtime: '116 min',
                        genre: 'Drama, Romance, Sci-Fi, Thriller',
                        director: 'Morten Tyldum',
                        writer: 'Jon Spaihts',
                        plot: 'The spaceship, Starship Avalon, in its 120-year voyage to a distant colony planet known as the "Homestead Colony" and transporting 5,258 people has a malfunction in one of its sleep chambers. As a result one hibernation pod opens prematurely and the one person that awakes, Jim Preston (Chris Pratt) is stranded on the spaceship, still 90 years from his destination.',
                        language: 'English, Spanish, Japanese, French',
                        country: 'USA, Australia',
                        awards: 'Nominated for 2 Oscars. Another 1 win & 9 nominations.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                        ratings: '5.5',
                        metaScore: '41',
                        imdbRating: '7.0',
                        imdbVotes: '309,316',
                        imdbId: 'tt1355644',
                        type: 'movie',
                        dvd: '14 Mar 2017',
                        boxOffice: '$100,014,092',
                        production: 'Columbia Pictures',
                        website: 'http://www.passengersmovie.com/',
                        response: true
                    },
                    {
                        id: 4,
                        title: 'Father!',
                        year: 2017,
                        rated: 'R',
                        released: '15 Sep 2017',
                        runtime: '121 min',
                        genre: 'Drama, Horror, Mystery',
                        director: 'Darren Aronofsky',
                        writer: 'Darren Aronofsky',
                        plot: 'A couple\'s relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.',
                        language: 'English',
                        country: 'USA',
                        awards: '5 wins & 30 nominations.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_SX300.jpg',
                        ratings: '7.2',
                        metaScore: '75',
                        imdbRating: '6.6',
                        imdbVotes: '154,502',
                        imdbId: 'tt5109784',
                        type: 'movie',
                        dvd: '19 Dec 2017',
                        boxOffice: '$17,297,289',
                        production: 'Paramount Pictures',
                        website: 'http://www.mothermovie.com',
                        response: true
                    }
                ]
            }
        ];
        return stars;
    }

}
