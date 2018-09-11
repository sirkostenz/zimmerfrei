import React from 'react'
import Link from 'gatsby-link'


// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const RoomOne_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

const RoomTwo_IMAGES = [
    { id: '1', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class Rooms extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        return (
            <div className="container">
                <h1>Die Zimmer</h1>
                <div className="text-bild">
                    <div className="text-bild-text">
                        <p>
                            Wir vermieten zwei Ferienzimmer in unserem Mehrfamilienhaus in Leezen. Die beiden Zimmer befinden sich im
                            Dachgeschoss. Sie sind sehr ruhig gelegen und verfügen über einen separaten Eingang. Die Zimmer sind für
                            Nichtraucher. Haustiere sind nicht gestattet. Leider sind sie für gehbehinderte Personen nicht geeignet.
                        </p>
                        <p>
                            Die Zimmer sind jeweils ein kombinierter Schlaf-Wohnbereich mit Kochnische und separatem Duschbad und WC.
                            Sie sind ca. 25m² groß und für 2 Personen eingerichtet. Eine Aufbettung für eine weitere Person ist kein
                            Problem und auch ein Kinderbett ist vorhanden. In beiden Zimmern befinden sich Fernseher und Radio.
                        </p>
                        <p>
                            Ideal für Selbstversorger - eine voll ausgestattet Miniküche: zwei Herdplatten, Mikrowelle, Kühlschrank,
                            Kaffeemaschine, Wasserkocher und jede Menge Geschirr... Sie können bei uns kochen, fast wie zu Hause. Und
                            sollte doch einmal etwas fehlen, fragen Sie uns. Wir können bestimmt aushelfen.
                        </p>
                        <p>
                            Bettwäsche, Handtücher, Geschirrtücher und diverse Reinigungsmittel stellen wir Ihnen natürlich zur Verfügung.
                            Auch Staubsauger und Bügeleisen finden Sie im Zimmer.
                        </p>
                        <p>
                            Last but not least, damit Sie sich auch keine Gedanken um Ihr Fahrzeug machen müssen, haben wir einen eigenen
                            großen Parkplatz direkt vor unserem Haus.  Und zum Entspannen steht Ihnen eine Sitzecke im Garten zur Verfügung.
                        </p>
                        <p>
                            <Link to="/buchung">Infos / Buchungsbedingungen</Link>
                        </p>
                    </div>
                    <div className="text-bild-bild" style={{ display: 'none' }}>
                        <h3>Impressionen Apartment 1 (EZ)</h3>

                        <Gallery images={RoomOne_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <hr />
                        <h3>Impressionen Apartment 2 (DZ)2</h3>

                        <Gallery images={RoomTwo_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Rooms
