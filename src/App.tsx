import { useDivination } from './hooks/useDivination';
import { InkBackground } from './components/shared/InkBackground';
import { AppHeader } from './components/layout/AppHeader';
import { AppFooter } from './components/layout/AppFooter';
import { WelcomeView } from './components/divination/WelcomeView';
import { FocusQuestion } from './components/divination/FocusQuestion';
import { CoinTossPanel } from './components/divination/CoinTossPanel';
import { ResultDashboard } from './components/divination/ResultDashboard';

export default function App() {
  const { state, start, setQuestion, toss, complete, reset } = useDivination();

  return (
    <>
      <InkBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <AppHeader />
        <main>
          {state.phase === 'welcome' && (
            <WelcomeView onStart={start} />
          )}
          {state.phase === 'focusing' && (
            <FocusQuestion onSubmit={setQuestion} />
          )}
          {state.phase === 'tossing' && (
            <CoinTossPanel
              question={state.question}
              tosses={state.tosses}
              onToss={toss}
              onComplete={complete}
            />
          )}
          {state.phase === 'result' && (
            <ResultDashboard state={state} onReset={reset} />
          )}
        </main>
        <AppFooter />
      </div>
    </>
  );
}
