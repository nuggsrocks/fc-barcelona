import React from 'react'
import { View } from '../components/View'
import { Header } from '../components/Header'
import { Body } from '../components/Body'
import { Footer } from '../components/Footer'

export const RivalsView = () => {
  return <View>
    <Header>Rivals</Header>
    <Body>
      <p>
        There is often a fierce rivalry between the two strongest teams in a
        national league, and this is particularly the case in La Liga, where the
        game between Barcelona and Real Madrid is known as “El Clásico.” From
        the start of national competitions, the clubs were seen as
        representatives of two rival regions in Spain: Barcelona in Catalonia
        and Madrid in Castile. The rivalry reflects what many regard as the
        political and cultural tensions felt between Catalans and Castilians,
        with the Castilians historically being in favor of the monarchy and the
        Catalans historically being against it.
      </p>
      <p>
        Barça&apos;s local rival has always been Espanyol. Being one of the clubs
        granted royal patronage, Espanyol was founded exclusively by Spanish
        football fans, unlike the multinational nature of Barça&apos;s formation.
        This led to a strengthened rivalry due to the Barcelonistas’ hatred and
        distrust of the Spanish crown. Meanwhile, the founding message of
        Espanyol was clearly anti-Barcelona, and they have disapprovingly viewed
        FC Barcelona as a team of foreigners. The rivalry is known as El Derbi
        Barceloní.
      </p>
    </Body>
    <Footer>Barcelona has 96 wins all-time in competitive El Clásico
      matches. Real Madrid has 146.</Footer>
  </View>
}
