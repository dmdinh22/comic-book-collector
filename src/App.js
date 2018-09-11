import React, { Component } from 'react';
import './App.css';

const comic = {
    code: 200,
    status: 'Ok',
    copyright: '© 2018 MARVEL',
    attributionText: 'Data provided by Marvel. © 2018 MARVEL',
    attributionHTML:
        '<a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>',
    etag: '5d55f3b593617bd427d632d70506bd93000c9306',
    data: {
        offset: 0,
        limit: 20,
        total: 1,
        count: 1,
        results: [
            {
                id: 60602,
                digitalId: 44277,
                title: 'Deadpool (2015) #28',
                issueNumber: 28,
                variantDescription: '',
                description:
                    "Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up.",
                modified: '2017-03-16T09:16:59-0400',
                isbn: '',
                upc: '75960608332902811',
                diamondCode: 'JAN171058',
                ean: '',
                issn: '1946-9292',
                format: 'Comic',
                pageCount: 32,
                textObjects: [
                    {
                        type: 'issue_solicit_text',
                        language: 'en-us',
                        text:
                            "Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up."
                    }
                ],
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/60602',
                urls: [
                    {
                        type: 'detail',
                        url:
                            'http://marvel.com/comics/issue/60602/deadpool_2015_28?utm_campaign=apiRef&utm_source=7b335631f5ed1358048db3ebfd738a30'
                    },
                    {
                        type: 'purchase',
                        url:
                            'http://comicstore.marvel.com/Deadpool-28/digital-comic/44277?utm_campaign=apiRef&utm_source=7b335631f5ed1358048db3ebfd738a30'
                    },
                    {
                        type: 'reader',
                        url:
                            'http://marvel.com/digitalcomics/view.htm?iid=44277&utm_campaign=apiRef&utm_source=7b335631f5ed1358048db3ebfd738a30'
                    },
                    {
                        type: 'inAppLink',
                        url:
                            'https://applink.marvel.com/issue/44277?utm_campaign=apiRef&utm_source=7b335631f5ed1358048db3ebfd738a30'
                    }
                ],
                series: {
                    resourceURI:
                        'http://gateway.marvel.com/v1/public/series/20613',
                    name: 'Deadpool (2015 - 2017)'
                },
                variants: [],
                collections: [],
                collectedIssues: [],
                dates: [
                    {
                        type: 'onsaleDate',
                        date: '2017-03-01T00:00:00-0500'
                    },
                    {
                        type: 'focDate',
                        date: '2017-02-06T00:00:00-0500'
                    },
                    {
                        type: 'unlimitedDate',
                        date: '2017-09-04T00:00:00-0400'
                    },
                    {
                        type: 'digitalPurchaseDate',
                        date: '2017-03-01T00:00:00-0500'
                    }
                ],
                prices: [
                    {
                        type: 'printPrice',
                        price: 3.99
                    },
                    {
                        type: 'digitalPurchasePrice',
                        price: 3.99
                    }
                ],
                thumbnail: {
                    path:
                        'http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a',
                    extension: 'jpg'
                },
                images: [
                    {
                        path:
                            'http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a',
                        extension: 'jpg'
                    }
                ],
                creators: {
                    available: 7,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/60602/creators',
                    items: [
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/665',
                            name: 'Reilly Brown',
                            role: 'penciler (cover)'
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/9937',
                            name: 'Jim Charalampidis',
                            role: 'colorist (cover)'
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/11680',
                            name: 'Gerry Duggan',
                            role: 'writer'
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/13251',
                            name: 'Salva Espin',
                            role: 'inker'
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/13008',
                            name: 'Ruth Redmond',
                            role: 'colorist'
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/12974',
                            name: 'Vc Joe Sabino',
                            role: 'letterer'
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/8822',
                            name: 'Jordan White',
                            role: 'editor'
                        }
                    ],
                    returned: 7
                },
                characters: {
                    available: 1,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/60602/characters',
                    items: [
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/characters/1009268',
                            name: 'Deadpool'
                        }
                    ],
                    returned: 1
                },
                stories: {
                    available: 2,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/60602/stories',
                    items: [
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/stories/131673',
                            name: 'cover from Deadpool (2015) #28',
                            type: 'cover'
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/stories/131674',
                            name: 'story from Deadpool (2015) #28',
                            type: 'interiorStory'
                        }
                    ],
                    returned: 2
                },
                events: {
                    available: 0,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/60602/events',
                    items: [],
                    returned: 0
                }
            }
        ]
    }
};

class App extends Component {
    render() {
        // destructure and pull out the thumbnail data
        //  same as 'comic.data.results[0].thumbnail when using 'thumbnail' in JSX
        const metaData = comic.data.results[0];
        const { thumbnail, issueNumber, pageCount, dates, prices } = metaData;

        return (
            <div className="comic">
                <div className="comic-thumbnail-container">
                    <img
                        className="comic-thumbnail"
                        src={`${thumbnail.path}.${thumbnail.extension}`}
                    />
                </div>
                <div className="comic-data-container">
                    <h2>{metaData.title}</h2>
                    <p>Issue: {issueNumber}</p>
                    <p>Pages: {pageCount}</p>
                    <p>Date: {new Date(dates[0].date).toLocaleDateString()}</p>
                    <p>Price: ${prices[0].price}</p>
                </div>
            </div>
        );
    }
}

export default App;
