import React from 'react';
import Accordion from '../component/accordion'

export default function AccordionContent() {
  return (
    <div>
      <div>
        <Accordion
          title="Introduction"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              History/About
              <span class='time'>
                12 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Why prototype? Why test?
              <span class='time'>
                10 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Types of Prototypes
              <span class='time'>
                14 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
          "
        />
        <Accordion
          title="Step 1: Building and planning"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Setting goals and determining the right questions
              <span class='time'>
                20 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Think as you build
              <span class='time'>
                18 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Planning for success
              <span class='time'>
                34 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
          "
        />
        <Accordion
          title="Step 2: Testing and Learning"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Identifying the right audience
              <span class='time'>
                25 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Testing to learn (testing the right way)
              <span class='time'>
                38 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
          "
        />

        <Accordion
          title="Step 3: Iterating and Improving"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              How to iterate for a successful outcome
              <span class='time'>
                45 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Steps to improving: continuing the cycle
              <span class='time'>
                40 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
          "
        />

        <Accordion
          title="Conclusion"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Continuing the cycle to meet long term goals
              <span class='time'>
                25 Mins.
                <svg width='12' height='16' viewBox='0 0 12 16' fill='none'><path d='M10.54 6.353h-.412l-.002-2.051A4.058 4.058 0 006.071.25 4.058 4.058 0 002.02 4.305l.003 2.052h-.147A1.392 1.392 0 00.486 7.75v6.108c0 .769.625 1.392 1.394 1.392l8.663-.005a1.39 1.39 0 001.39-1.392v-6.11c0-.768-.625-1.39-1.393-1.39zm-7.024.004l-.003-2.052a2.564 2.564 0 012.558-2.562 2.562 2.562 0 012.56 2.559l.004 2.051-5.119.004z' fill='#000'></path></svg>
              </span>
            </p>
          "
        />
      </div>
    </div>
  )
}
