import React from "react";

import styled from "styled-components";

const MainContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 800px;
  width: 80%;
`;

const FAQ = () => {
  return (
    <MainContainer>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Jak używać aplikacji efektywnie?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Nie używaj polskich znaków!</strong> Aplikacja nie zwróci
              błędu, jednakże twoje polskie znaki np. 'ł', 'ą' nie zostaną
              zakodowane, zostaną jawne pomimo, że pozostałe znaki zostaną
              zaszyfrowane.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Szczegółowa instrukcja obsługi aplikacji
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                Wykonaj poniższe kroki w celu zaszyfrowania/odszyfrowania
                tekstu:
              </strong>
              <ul>
                <li>wybierz rodzaj operacji, szyfrowanie lub deszyforowanie</li>
                <li>wpisz treść treść tekstową</li>
                <li>wybierz odpowiedni klucz szyfrujący</li>
                <li>
                  sprawdź rezultat operacji i wizualizację
                  szyfrowania/deszyfrowania
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Szyfr Cezara, dodatkowe informacje
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Szyfr Cezara (zwany też szyfrem przesuwającym, kodem Cezara lub
              przesunięciem Cezariańskim) – jedna z najprostszych technik
              szyfrowania. Jest to rodzaj szyfru podstawieniowego, w którym
              każda litera tekstu jawnego (niezaszyfrowanego) zastępowana jest
              inną, oddaloną od niej o stałą liczbę pozycji w alfabecie, literą
              (szyfr monoalfabetyczny), przy czym kierunek zamiany musi być
              zachowany. Nie rozróżnia się przy tym liter dużych i małych. Nazwa
              szyfru pochodzi od Juliusza Cezara, który prawdopodobnie używał
              tej techniki do komunikacji ze swymi przyjaciółmi.
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default FAQ;
