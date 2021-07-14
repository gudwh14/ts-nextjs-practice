import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <h1>Create-Next-App 을 이용해 설치하게 되면</h1>
            <p>1. 컴파일과 번들링이 자동으로 된다. (webpack, Babel)</p>
            <p>2. 자동 리프레쉬 기능을 지원하여 수정시 바로 반영된다.</p>
            <p>3. SSR 을 지원한다.</p>
            <p>4. 스태틱 파일을 지원한다.</p>
        </div>
    )
}
