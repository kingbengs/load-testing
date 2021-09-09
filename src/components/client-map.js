import React, { Component } from 'react'
import styled from 'styled-components'
import germanyMap from '../assets/clients/germany.png'
import { media } from '../shared/styles'

const ourClients = [
  {
    name: 'Brandenburgklinik Berlin-Brandenburg GmbH',
    x: 52.7329074,
    y: 13.4892494,
    link:
      'https://www.michelskliniken.de/kliniken/brandenburgklinik-berlin-brandenburg/',
  },
  {
    name: 'Sachsenklinik GmbH',
    x: 51.1481342,
    y: 12.6459909,
    link: 'https://www.michelskliniken.de/kliniken/sachsenklinik-bad-lausick/',
  },
  {
    name: 'NRZ Neurologisches Rehabilitationszentrum Leipzig',
    x: 51.34967,
    y: 12.644016,
    link:
      'https://www.michelskliniken.de/kliniken/neurologisches-rehabilitationszentrum-leipzig/ihre-klinik/',
  },
  {
    name: 'Herzog-Julius-Klinik Bad Harzburg',
    x: 51.81209,
    y: 10.555496,
    link:
      'https://www.michelskliniken.de/kliniken/herzog-julius-klinik-bad-harzburg/',
  },
  {
    name: 'Barbarossa Klinik Bad Harzburg GmbH',
    x: 51.9381092,
    y: 10.5615306,
    link:
      'https://www.michelskliniken.de/kliniken/barbarossa-klinik-nrz-harz-bad-harzburg/',
  },
  {
    name: 'Michels Hotels GmbH (Thalasso Hotel Nordseehaus)',
    x: 53.70413,
    y: 7.144646,
    link: 'https://www.michelshotels.de/hotel/thalasso-hotel-nordseehaus/',
  },
  {
    name: 'ATZ Leipzig',
    x: 51.3430824,
    y: 12.3566558,
    link:
      'https://www.michelskliniken.de/kliniken/ambulantes-therapiezentrum-leipzig/',
  },
  {
    name: 'ZAR Aalen',
    x: 48.9020985,
    y: 10.0927092,
    link: 'http://www.zar-aalen.de/',
  },
  {
    name: 'ZAR Berlin',
    x: 52.5292969,
    y: 13.5208982,
    link: 'http://www.zar-berlin.de/',
  },
  {
    name: 'ZAR Bielefeld',
    x: 52.0127586,
    y: 8.5270655,
    link: 'http://www.zar-bielefeld.de/',
  },
  {
    name: 'ZAR Göppingen',
    x: 48.6985715,
    y: 9.6653867,
    link: 'https://www.zar-goeppingen.de/',
  },
  {
    name: 'ZAR Kaiserslautern',
    x: 49.4577735,
    y: 7.8008687,
    link: 'http://www.zar-kaiserslautern.de/',
  },
  {
    name: 'ZAR Landstuhl',
    x: 49.3984554,
    y: 7.5778806,
    link: 'http://www.zar-landstuhl.de/',
  },
  {
    name: 'ZAR am Klinikum Ludwigshafen',
    x: 49.5909294,
    y: 8.3222152,
    link: 'http://www.zar-ludwigshafen-klinikum.de/',
  },
  {
    name: 'ZAR Ludwigshafen am St. Marienkrankenhaus',
    x: 49.4571265,
    y: 8.3056736,
    link: 'http://www.zar-ludwigshafen.de/',
  },
  {
    name: 'ZAR Mainz',
    x: 50.000103,
    y: 8.2551025,
    link: 'http://www.zar-mainz.de/',
  },
  {
    name: 'ZAR Mannheim auf dem Sand',
    x: 49.51511,
    y: 8.505856,
    link: 'http://www.zar-mannheim.de/',
  },
  {
    name: 'medicos.AufSchalke',
    x: 51.5576634,
    y: 7.0651059,
    link: 'https://www.medicos-aufschalke.de/',
  },
  // New
  {
    name: 'AktivioMed',
    x: 48.9814051,
    y: 8.4029037,
    link: 'http://www.aktiviomed.de/',
  },
  {
    name:
      'REHA-ZENTRUM Praxis für Ambulante Rehabilitation Siegfried Peter Braun',
    x: 48.6288,
    y: 9.333606,
    link: 'https://physio-braun-nuertingen.de/',
  },
  {
    name: 'activano medical fitness GmbH',
    x: 50.1111203,
    y: 8.8998802,
    link: 'https://www.activano.de/',
  },
  {
    name: 'Rehazentrum am Kelternplatz GmbH',
    x: 48.490671,
    y: 9.2849928,
    link: 'http://rehazentrummetzingen.de/',
  },
  {
    name: 'Rehazentrum Offenburg',
    x: 48.46973,
    y: 7.936256,
    link: 'http://rehazentrumoffenburg.de/',
  },
  {
    name: 'Rehazentrum Lörrach-Haagen GmbH',
    x: 47.6352406,
    y: 7.6778181,
    link: 'http://rehazentrum-loerrach.de/',
  },
  {
    name: 'Therapiezentrum Alexander Lack',
    x: 48.3923217,
    y: 10.1031489,
    link: 'https://therapiezentrum-lack.de/',
  },
  {
    name: 'FPZ am Rhein',
    x: 50.9123044,
    y: 6.9703406,
    link: 'https://profil.fpz.de/p/koeln',
  },
  {
    name:
      'Balance Sandgasse, Zentrum für Physiotherapie und Med. Fitness, Orth GbR',
    x: 49.9744912,
    y: 9.1450168,
    link: 'https://www.balance-aschaffenburg.de/',
  },
  {
    name: 'FPZ Rückentherapiezentrum Freiburg Süd',
    x: 47.9794232,
    y: 7.8294388,
    link: 'http://ruecken-freiburg.de/',
  },
  {
    name: 'Praxis für Physiotherapie Sven Stoll',
    x: 54.0721791,
    y: 12.0548395,
    link: 'https://www.physio-stoll.de/',
  },
  {
    name: 'Trierer-Rückenzentrum',
    x: 49.7241943,
    y: 6.5882901,
    link: 'http://xn--rckenzentrum-trier-m6b.de/',
  },
  {
    name: 'dr.bientzle Gesundheitsclub Sinzheim',
    x: 48.7715859,
    y: 8.1708611,
    link: 'https://www.drbientzle-gesundheitsclub.de/',
  },
  {
    name: 'ATLAS Training',
    x: 48.7937716,
    y: 9.3182668,
    link: 'https://www.fitnessprofi.de/home.html',
  },
  {
    name: 'Fachklinik Feldberg GmbH "KLINIK AM HAUSSEE"',
    x: 53.34124,
    y: 13.431586,
    link: 'https://www.klinik-am-haussee.de/',
  },
  {
    name: 'HKB-Klinik GmbH & Co. Klinik Rabenstein KG',
    x: 50.4174475,
    y: 8.9850353,
    link: 'https://klinik-rabenstein.de/',
  },
  {
    name: 'Klinikzentrum Bad Sulza GmbH',
    x: 51.0911287,
    y: 11.6274191,
    link:
      'http://www.toskanaworld.net/web/klinik/content/klinikzentrum.php?areaID=8',
  },
  {
    name: 'f+p GmbH',
    x: 47.7170145,
    y: 10.2922339,
    link: 'https://www.fp-kempten.de/',
  },
  {
    name: 'Klinik im Alpenpark GmbH',
    x: 47.6989039,
    y: 11.7296437,
    link: 'https://www.klinik-alpenpark.de/',
  },
  {
    name: 'ORTEMA GmbH',
    x: 48.9082055,
    y: 9.1047905,
    link: 'https://www.ortema.de/',
  },
  {
    name: 'Rehaktiv Oberberg',
    x: 51.0264,
    y: 7.560876,
    link: 'https://www.rehaktiv-oberberg.de/',
  },
  {
    name: 'Ambulantes Rehazentrum GmbH',
    x: 50.36658,
    y: 7.5714712,
    link: 'https://www.rehazentrum-koblenz.de/',
  },
  {
    name: 'ambulante reha eschler',
    x: 51.4533353,
    y: 6.6194013,
    link: 'http://www.ambulante-reha-eschler.de/',
  },
  {
    name: 'Paracelsus-Kliniken Deutschland GmbH & Co. KGaA',
    x: 52.2883494,
    y: 8.0102994,
    link: 'https://www.paracelsus-kliniken.de/index.php?id=518',
  },
  {
    name: 'Nachsorgezentrum Lichtenau',
    x: 51.2123596,
    y: 9.6057154,
    link: 'https://www.nachsorgezentrum.de/',
  },
  // Modified manually
  {
    name: 'Orthopädischen Klinik Hessisch Lichtenau gGmbH',
    x: 51.2123596,
    y: 9.8057154,
    link: 'http://www.klinik-lichtenau.de/',
  },
  {
    name: 'ZAR Bad Cannstatt',
    x: 48.9293765,
    y: 9.2903172,
    link: 'http://www.zar-badcannstatt.de/',
  },
  {
    name: 'ZAR München',
    x: 48.1325214,
    y: 11.5315639,
    link: 'http://www.zar-muenchen.de/',
  },
  {
    name: 'medicos.Oberhausen',
    x: 51.47078,
    y: 6.835086,
    link: 'http://www.medicos-oberhausen.de/',
  },
  {
    name: 'ZAR Paderborn',
    x: 51.7113218,
    y: 8.7574457,
    link: 'https://www.zar-paderborn.de/',
  },
  {
    name: 'ZAR Regensburg ',
    x: 49.0041159,
    y: 12.0644543,
    link: 'http://www.zar-regensburg.de/',
  },
  {
    name: 'ZAR Stuttgart',
    x: 48.7210439,
    y: 9.1555129,
    link: 'http://www.zar-stuttgart.de/',
  },
  {
    name: 'ZAR Trier',
    x: 49.8146589,
    y: 6.7107991,
    link: 'http://www.zar-trier.de/',
  },
  {
    name: 'ZAR Tübingen am Universitätsklinikum',
    x: 48.5314107,
    y: 9.0344119,
    link: 'http://www.zar-tuebingen.de/',
  },
  {
    name: 'ZAR am Universitätsklinikum Ulm',
    x: 48.395475,
    y: 9.877117,
    link: 'http://www.zar-ulm.de/',
  },
  {
    name: 'ZAR Wolfsburg ',
    x: 52.4140919,
    y: 10.7687382,
    link: 'http://www.zar-wolfsburg.de/',
  },
  {
    name: 'KnappschaftsKlinik Borkum',
    x: 53.59498,
    y: 6.662896,
    link:
      'https://www.kbs.de/DE/05_medizinisches_netz/2_reha-kliniken/20_borkum/InhaltsNav.html',
  },
  {
    name: 'Gesundheitsservice Management GSM GmbH',
    x: 51.0307821,
    y: 6.9830168,
    link: 'https://www.gsm-gesund.de/',
  },
  {
    name: 'Vivantes Rehabilitation GmbH',
    x: 52.4623775,
    y: 13.3433225,
    link: 'https://www.vivantes-reha.de/',
  },
  {
    name: 'MEDIAN Klinik Mühlengrund Bad Wildungen',
    x: 51.1154233,
    y: 9.0693013,
    link:
      'https://www.median-kliniken.de/de/median-klinik-muehlengrund-bad-wildungen/',
  },
  {
    name: 'BG Klinik für Berufskrankheiten Bad Reichenhall gGmbH',
    x: 47.7316594,
    y: 12.8818239,
    link: 'https://www.bgklinik-badreichenhall.de/',
  },
  {
    name: 'Johannesbad Reha-Kliniken AG & Co. KG',
    x: 48.3486981,
    y: 13.3264018,
    link: 'https://www.johannesbad-fachklinik.de/',
  },
  {
    name: 'FPZ GmbH',
    x: 50.7825942,
    y: 6.9706035,
    link: 'https://www.fpz.de/',
  },
  {
    name: 'Klinik Reinhardsquelle',
    x: 51.11339,
    y: 9.0795813,
    link: 'https://www.klinik-reinhardsquelle.de/index.php/reinhardsquelle_home.html'
  },
  //new 15.06.2020
  {
    name: 'Ambulantes Rehazentrum Wöhrderwiese',
    x: 49.4505065,
    y: 11.085409,
    link: 'rehazentrum-ww.de'
  },
  {
    name: 'Ortho-Mobile Hattinger ambulante Rehabilitationsklinik GmbH',
    x: 51.3997033,
    y: 7.179552,
    link: ' https://www.ortho-mobile.de/'
  },
  {
    name: 'KMG Kliniken SE',
    x: 53.0792586,
    y: 11.6357884,
    link: 'kmg-kliniken.de'
  },
  {
    name: 'Gesundheitsdenkwerk GmbH',
    x: 49.4504826,
    y: 11.085742,
    link: 'gesundheitsdenkwerk.de'
  },
  {
    name: 'pro medik Reha + Prävention',
    x: 50.88392,
    y: 6.8841613,
    link: 'https://www.promedik.de/'
  },
  {
    name: 'SRH Gesundheits- zentrum Bad Wimpfen',
    x: 49.23328,
    y: 9.1518013,
    link: 'https://www.gesundheitszentrum-badwimpfen.de/'
  },
  {
    name: 'Wicker Gesundheit & Pflege',
    x: 50.88237,
    y: 10.4981613,
    link: 'https://inselsberg-klinik.de/adresse.html'
  },
  {
    name: 'SRH Zentrale - Gesundheitszentren Nordschwarzwald Dobel',
    x: 48.8013535,
    y: 8.5015513,
    link: 
    'https://www.gesundheitszentren-nordschwarzwald.de/ueber-uns/klinik-standorte/waldklinik-dobel/klinik-und-anfahrt/'
  },
  {
    name: 'Reha Vita GmbH',
    x: 51.7546378,
    y: 14.3343199,
    link: 'https://www.reha-vita-online.de/'
  },
  {
    name: 'SRH Kurpfalzkrankenhaus Heidelberg GmbH',
    x: 49.4135109,
    y: 8.6515871,
    link: 'https://www.kurpfalzkrankenhaus.de/'
  },
  {
    name: 'Caspar Heinrich klinik Bad Driburg GmbH & Co.KG',
    x: 51.74055,
    y: 9.0243913,
    link: 'https://www.caspar-heinrich-klinik.de/'
  },
]

const MapContainer = styled.div`
  position: relative;
  display: inline-block;
  max-width: 90%;

  ${media.tablet`
    height: 45rem;
  `}

  ${media.desktop`
    margin-left: 17rem;
  `}
`
const ClientMapImage = styled.img`
  height: auto;
  max-width: 100%;
  ${media.tablet`
    height: 100%;
    max-width: unset;
  `}
`

const mostNorthPoint = 55.05
const mostSouthPoint = 47.27
const mostEastPoint = 15.33
const mostWestPoint = 5.87
const centerLongitude = (mostNorthPoint + mostSouthPoint) / 2 + 1
const centerLatitude = (mostEastPoint + mostWestPoint) / 2
const mapHeight = mostNorthPoint - mostSouthPoint
const mapWidth = mostEastPoint - mostWestPoint

const OurClientPoint = styled.a`
  position: absolute;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${props => (props.yes ? 'red' : '#1ed8be')};
  cursor: pointer;
  bottom: ${props => ((props.x - mostSouthPoint) * 100) / mapHeight}%;
  left: calc(
    ${props =>
      ((props.y - mostWestPoint + curveCoefficient(props.x, props.y)) * 100) /
      mapWidth}%
  );
  z-index: 10;

  &:hover {
    background-color: white;
  }
`

const curveCoefficient = (longitude, latitude) => {
  const longitudeIndex = (longitude - centerLongitude) / centerLongitude
  const latitudeIndex = (latitude - centerLatitude) / centerLatitude
  const multiplier = longitudeIndex > 0 ? 100 : 25
  return latitudeIndex * longitudeIndex > 0
    ? -longitudeIndex * longitudeIndex * multiplier
    : longitudeIndex * longitudeIndex * multiplier
}

const OutClientPointHover = styled.div`
  position: absolute;
  font-size: 1rem;
  padding: 0.8rem;
  color: white;

  background-color: #1ed8be;
  bottom: calc(
    ${props => ((props.x - mostSouthPoint) * 100) / mapHeight}% + 1.5rem
  );
  left: calc(
    ${props =>
        ((props.y - mostWestPoint + curveCoefficient(props.x, props.y)) * 100) /
        mapWidth}% + 4px
  );
  transform: translateX(-50%);
  z-index: 20;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    right: calc(50% - 0.5rem);
    bottom: -0.7rem;
    border-top: solid 0.7rem #1ed8be;
    border-left: solid 0.5rem transparent;
    border-right: solid 0.5rem transparent;
  }
`

export default class ClientMap extends Component {
  state = {
    activeClinic: null,
  }

  handleMouseHover(x) {
    this.setState({ activeClinic: x })
  }

  render() {
    const activeClinic = this.state.activeClinic
    return (
      <MapContainer>
        <ClientMapImage src={germanyMap} />
        {activeClinic && (
          <OutClientPointHover x={activeClinic.x} y={activeClinic.y}>
            {activeClinic.name}
          </OutClientPointHover>
        )}
        {ourClients.map((clinic, i) => (
          <OurClientPoint
            target="_blank"
            href={clinic.link}
            onMouseEnter={this.handleMouseHover.bind(this, clinic)}
            onMouseLeave={this.handleMouseHover.bind(this, null)}
            key={i}
            x={clinic.x}
            y={clinic.y}
          />
        ))}
      </MapContainer>
    )
  }
}
