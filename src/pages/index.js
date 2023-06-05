import React from 'react';
import Link from 'next/link';
import SecondLanding from './SecondLanding'
import FirstLanding from './FirstLanding'
import ThirdLanding from './ThirdLanding'
import FourthLanding from './FourthLanding'
import Head from 'next/head'

export default class extends React.Component {

  render() {
      return (
        <>
        <Head>
            <title>Spiess Carpet Cleaning</title>
            <link rel="icon" href="../../public/images/icon.ico" />
        </Head>
            <div className="body">
              <div className="wrapper">
                    <FirstLanding />
                    <SecondLanding />
                    <ThirdLanding />
                    <FourthLanding />
                  </div>
            </div>
        </>
      )
    }
  }
