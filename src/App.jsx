import { Suspense } from 'react'
import './App.css'
import { RecoilRoot } from 'recoil'
import ChatSection from './components/chatBot'

function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>Loading contents...</div>}>
            <ChatSection/>
        </Suspense>
      </RecoilRoot>
    </>)
}

export default App