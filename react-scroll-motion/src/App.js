import './App.css';
import React from 'react';
import { Animator, ScrollContainer, ScrollPage, Sticky, batch, MoveOut, Fade, FadeIn, ZoomIn, StickyIn, Move, MoveIn } from 'react-scroll-motion';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2>Let me show you scroll animation</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <h2>FadeUpScrollOut!</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <h2>FadeUp!</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <div className='section-3'>
          <h2>
            <Animator animation={MoveIn(-1000, 0)}>Hello guys ✌</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 😎</Animator>
            <Animator animation={MoveOut(1000, 0)}>Good Bye 🙌</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 🌹</Animator>
          </h2>
        </div>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <h2>Done ✔</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
