import React from "react";

const Rivals = () => {
    return (
        <div>
            <h2>
                Rivalries
            </h2>
            <p className={'barca-text'}>
                There is often a fierce rivalry between the two strongest teams in a national league,
                and this is particularly the case in La Liga, where the game between Barcelona and Real Madrid is
                known as <em className={'names'}>El Cl&aacute;sico</em>. From the start of national competitions, the clubs
                were seen as representatives of two rival regions in Spain: Barcelona in Catalonia and Madrid in Castile.
                The rivalry reflects what many regard as the political and cultural tensions felt between Catalans and Castilians,
                and their disagreements over the monarchy.
            </p>
            <p className={'barca-text'}>
                Bar&ccedil;a's local rival has always been Espanyol. Being one of the clubs granted
                royal patronage, Espanyol was founded exclusively by Spanish football fans, unlike the multinational
                nature of Bar&ccedil;a's formation. This led to a strengthened rivalry due to the <em>Barcelonistas</em>'
                hatred and distrust of the Spanish crown. Meanwhile, the founding message of Espanyol was clearly
                anti-Barcelona, and they have disapprovingly viewed FC Barcelona as a team of foreigners.
                The rivalry is known as <em className={'names'}>El Derbi Barcelon&iacute;</em>.
            </p>
            <code>Barcelona has 96 wins all-time in competitive <em>El Cl&aacute;sico</em> matches. Real Madrid has 146.</code>
        </div>
    )
};

export default Rivals;