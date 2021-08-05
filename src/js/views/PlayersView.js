import React from 'react'
import { View } from '../components/View'
import { Header } from '../components/Header'
import { Body } from '../components/Body'
import { Footer } from '../components/Footer'

export const PlayersView = () => {
  return <View>
    <Header>Players</Header>
    <Body>
      <p>
        Spanish teams are limited to three players without EU citizenship. The
        squad list includes only the principal nationality of each player;
        several non-European players on the squad have dual citizenship with an
        EU country. Barcelona has employed many famous players, with five FIFA
        World Player of the Year award winners and six Ballon d&apos;Or winners among
        the previous and current Barcelona players. This makes Barça the club
        with the most top player awards received all-time. In 2009, Barcelona
        won an unprecedented sextuple by winning La Liga, the Copa del Rey, the
        Supercopa de España, the UEFA Champions League, the UEFA Supercup and
        the FIFA Club World Cup in one calendar year. The same year, five of
        their players and their coach were voted onto the UEFA Team of the Year
        2009.
      </p>
    </Body>
    <Footer>Current Manager: Ronald Koeman</Footer>
  </View>
}