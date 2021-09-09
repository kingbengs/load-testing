import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { injectIntl } from 'react-intl'

import michelsKlinikeLogo from '../assets/partners/michels-klinike.png'
import muhlengrundLogo from '../assets/partners/muhlengrund.png'
import vivantesLogo from '../assets/partners/vivantes.png'
import zarLogo from '../assets/partners/zar.png'
import bgClinicLogo from '../assets/partners/bg-kliniken.jpg'
import johannesbadLogo from '../assets/partners/johannesbad.jpg'
import fpzLogo from '../assets/partners/fpz.png'
import deutschRenteversicherungLogo from '../assets/partners/deutsch-renteversicherung.png'
import knappschaftLogo from '../assets/partners/knappschaft.png'
import vgbLogo from '../assets/partners/vgb.png'
import bigLogo from '../assets/partners/big.png'
import klinkRabensteinLogo from '../assets/partners/klinik-rabenstein.jpg'
import klinkAmHausseeLogo from '../assets/partners/klinik-am-haussee.jpg'
import rehazentrumKoblenzLogo from '../assets/partners/rehazentrum-koblenz.jpg'
import rehaktivOberbergLogo from '../assets/partners/rehaktiv-oberberg.jpg'
import ortemaLogo from '../assets/partners/ortema.png'
import klinkAlpenparkLogo from '../assets/partners/klinik-alpenpark.png'
import fpKemptenLogo from '../assets/partners/fp-kempten.jpg'
import paracelsusKlinikenLogo from '../assets/partners/paracelsus-kliniken.jpg'
import nachsorgezentrumLogo from '../assets/partners/nachsorgezentrum.jpg'
import ambulanteRehaEschlerLogo from '../assets/partners/ambulante-reha-eschler.jpg'
import klinikLichtenauLogo from '../assets/partners/klinik-lichtenau.jpg'
import axaLogo from '../assets/partners/axa.png'
import orthoMobileLogo from '../assets/partners/ortho-mobile.jpg'
import klinikReinhardsquelleLogo from '../assets/partners/Klinik-reinhardsquelle.jpg'
import rehazentrumWoehrderwieseLogo from '../assets/partners/Rehazentrum-Woehrderwiese.jpg'
import kmgKlinikenLogo from '../assets/partners/KMG-Kliniken.jpg'
import gesundheitsDenkwerkLogo from '../assets/partners/Gesundheits-denkwerk.jpg'
import klinikZentrumBadSulzaLogo from '../assets/partners/klinik-zentrum-bad-sulza.jpg'
import sanaLogo from '../assets/partners/sana.jpg'
import passauerwolfLogo from '../assets/partners/passauerwolf.jpg'
import schmiederLogo from '../assets/partners/schmieder.jpg'
import medicalparkLogo from '../assets/partners/medicalpark.jpg'
import srhLogo from '../assets/partners/srh.jpg'

const ClientLogo = styled.img`
  max-height: 5.5rem;
`

const SliderWrapper = styled.div`
  .slick-slide {
    margin: 0 1.5rem;
  }
`

const logoSliderSettings = {
  className: 'slider variable-width',
  infinite: true,
  variableWidth: true,
  autoplay: true,
  speed: 2000,
  cssEase: 'linear',
  pauseOnHover: false,
  centerPadding: '50',
  autoplaySpeed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ClientSlider = ({ intl }) => (
  <SliderWrapper>
    <Slider {...logoSliderSettings}>
    <ClientLogo
        style={{ width: '17rem' }}
        src={passauerwolfLogo}
        alt={intl.formatMessage({
          id: 'index.partners.passauerwolf',
        })}
      />
    <ClientLogo
        style={{ width: '4rem' }}
        src={sanaLogo}
        alt={intl.formatMessage({
          id: 'index.partners.sana',
        })}
      />
      <ClientLogo
        style={{ width: '11rem' }}
        src={schmiederLogo}
        alt={intl.formatMessage({
          id: 'index.partners.schmieder',
        })}
      />
      <ClientLogo
        style={{ width: '14rem' }}
        src={medicalparkLogo}
        alt={intl.formatMessage({
          id: 'index.partners.medicalpark',
        })}
      />
      <ClientLogo
        style={{ width: '8rem' }}
        src={srhLogo}
        alt={intl.formatMessage({
          id: 'index.partners.srh',
        })}
      />
      <ClientLogo
        style={{ width: '17.3rem' }}
        src={klinkRabensteinLogo}
        alt={intl.formatMessage({
          id: 'index.partners.klinikRabenstein',
        })}
      />
      <ClientLogo
        style={{ width: '17.3rem' }}
        src={deutschRenteversicherungLogo}
        alt={intl.formatMessage({
          id: 'index.partners.deutschRenteversicherung',
        })}
      />
      <ClientLogo
        style={{ width: '16.8rem' }}
        src={knappschaftLogo}
        alt={intl.formatMessage({
          id: 'index.partners.knappschaft',
        })}
      />
      <ClientLogo
        style={{ width: '5.9rem' }}
        src={axaLogo}
        alt={intl.formatMessage({
          id: 'index.partners.axa',
        })}
      />
      <ClientLogo
        style={{ width: '7rem' }}
        src={bigLogo}
        alt={intl.formatMessage({
          id: 'index.partners.big',
        })}
      />
      <ClientLogo
        style={{ width: '8.05rem' }}
        src={vivantesLogo}
        alt={intl.formatMessage({
          id: 'index.partners.vivantes',
        })}
      />
      <ClientLogo
        style={{ width: '4.8rem' }}
        src={zarLogo}
        alt={intl.formatMessage({
          id: 'index.partners.zar',
        })}
      />
      <ClientLogo
        style={{ width: '10.75rem' }}
        src={vgbLogo}
        alt={intl.formatMessage({
          id: 'index.partners.vgb',
        })}
      />
      <ClientLogo
        style={{ width: '10.05rem' }}
        src={muhlengrundLogo}
        alt={intl.formatMessage({
          id: 'index.partners.muhlengrund',
        })}
      />
      <ClientLogo
        style={{ width: '14.4rem' }}
        src={bgClinicLogo}
        alt={intl.formatMessage({
          id: 'index.partners.bgClinic',
        })}
      />
      <ClientLogo
        style={{ width: '14.6rem' }}
        src={michelsKlinikeLogo}
        alt={intl.formatMessage({
          id: 'index.partners.michelsKlinike',
        })}
      />
      <ClientLogo
        style={{ width: '14.6rem' }}
        src={johannesbadLogo}
        alt={intl.formatMessage({
          id: 'index.partners.johannesbad',
        })}
      />
      <ClientLogo
        style={{ width: '9.17rem' }}
        src={fpzLogo}
        alt={intl.formatMessage({
          id: 'index.partners.fpz',
        })}
      />
      <ClientLogo
        style={{ width: '14.8rem' }}
        src={klinikLichtenauLogo}
        alt={intl.formatMessage({
          id: 'index.partners.klinikLichtenau',
        })}
      />
      <ClientLogo
        style={{ width: '9.17rem' }}
        src={ambulanteRehaEschlerLogo}
        alt={intl.formatMessage({
          id: 'index.partners.ambulanteRehaEschler',
        })}
      />
      <ClientLogo
        style={{ width: '14.8rem' }}
        src={nachsorgezentrumLogo}
        alt={intl.formatMessage({
          id: 'index.partners.nachsorgezentrum',
        })}
      />
      <ClientLogo
        style={{ width: '11.5rem' }}
        src={paracelsusKlinikenLogo}
        alt={intl.formatMessage({
          id: 'index.partners.paracelsusKliniken',
        })}
      />
      <ClientLogo
        style={{ width: '11rem' }}
        src={fpKemptenLogo}
        alt={intl.formatMessage({
          id: 'index.partners.fpKempten',
        })}
      />
      <ClientLogo
        style={{ width: '17rem' }}
        src={klinkAlpenparkLogo}
        alt={intl.formatMessage({
          id: 'index.partners.klinikAlpenpark',
        })}
      />
      <ClientLogo
        style={{ width: '9rem' }}
        src={ortemaLogo}
        alt={intl.formatMessage({
          id: 'index.partners.ortema',
        })}
      />
      <ClientLogo
        style={{ width: '9.17rem' }}
        src={rehaktivOberbergLogo}
        alt={intl.formatMessage({
          id: 'index.partners.rehaktivOberberg',
        })}
      />
      <ClientLogo
        style={{ width: '6rem' }}
        src={rehazentrumKoblenzLogo}
        alt={intl.formatMessage({
          id: 'index.partners.rehazentrumKoblenz',
        })}
      />
      <ClientLogo
        style={{ width: '14rem' }}
        src={klinkAmHausseeLogo}
        alt={intl.formatMessage({
          id: 'index.partners.klinikAmHaussee',
        })}
      />
      <ClientLogo
        style={{ width: '5.9rem' }}
        src={orthoMobileLogo}
        alt={intl.formatMessage({
          id: 'index.partners.orthoMobile',
        })}
      />
      <ClientLogo
        style={{ width: '11rem' }}
        src={rehazentrumWoehrderwieseLogo}
        alt={intl.formatMessage({
          id: 'index.partners.rehazentrumWoehrderwiese',
        })}
      />
      <ClientLogo
        style={{ width: '14rem' }}
        src={klinikReinhardsquelleLogo}
        alt={intl.formatMessage({
          id: 'index.partners.klinikReinhardsquelle',
        })}
      />
      <ClientLogo
        style={{ width: '12rem' }}
        src={kmgKlinikenLogo}
        alt={intl.formatMessage({
          id: 'index.partners.kmgKliniken',
        })}
      />
      <ClientLogo
        style={{ width: '24rem' }}
        src={gesundheitsDenkwerkLogo}
        alt={intl.formatMessage({
          id: 'index.partners.gesundheitsDenkwerk',
        })}
      />
      <ClientLogo
        style={{ width: '9.17rem' }}
        src={klinikZentrumBadSulzaLogo}
        alt={intl.formatMessage({
          id: 'index.partners.klinikZentrumBadSulza',
        })}
      />
    </Slider>
  </SliderWrapper>
)

export default injectIntl(ClientSlider)
