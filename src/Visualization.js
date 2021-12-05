import React, {useEffect} from 'react';
import styled from 'styled-components'

const BlockVisualization = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  span {
    margin-left: 15px;

    p {
      text-align: center;
      margin-left: -10px;
    }
  }
`

const Visualization = ({text, encrypted}) => {
    
    const publicMessage = text.split('')
    const encryptedMessage = encrypted.split('')
    let objects = []

    // Przypisanie liter do nowych, wartości szyfrujących wiadomość
    for (let i = 0; i < publicMessage.length; i++) {
      const element = {
        id: i,
        letter_public: publicMessage[i],
        letter_encrypted: encryptedMessage[i]
      }
      objects.push(element)
    }
    
    const displayVisualization = objects.map(item => (
      <span key={item.id}>
        <p>{item.letter_public}</p>
        <p>{item.letter_encrypted}</p>
      </span>
    ))

    
    return ( 
        <BlockVisualization>
          {displayVisualization}
        </BlockVisualization>
     );
}
 
export default Visualization;

