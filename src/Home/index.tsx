import { ReactComponent as FlashCardIcon } from 'feather-icons/dist/icons/archive.svg'
import { ReactComponent as OfflineIcon } from 'feather-icons/dist/icons/download-cloud.svg'
import { ReactComponent as DarkIcon } from 'feather-icons/dist/icons/moon.svg'
import { ReactComponent as MobileIcon } from 'feather-icons/dist/icons/smartphone.svg'
import { ReactComponent as FocusIcon } from 'feather-icons/dist/icons/smile.svg'
import React from 'react'
import { authorUrl, repoPath, siteName } from '../config'
import { Button } from './Button'
import { FeatureItem, FeatureList } from './Feature'
import { Hero } from './Hero'
import { Section } from './Section'

export const Home: React.FunctionComponent = () => (
  <>
    <Hero
      title="What would you like to practice today?"
      lead="Hiragana and Katakana are components of the japanese writing system. With this Web App, you can learn them for free."
    >
      <div className="flex flex-col justify-between md:flex-row">
        <Button to="/hiragana" className="mb-8 md:mb-auto">
          Hiragana / ひらがな
        </Button>
        <Button to="/katakana">Katakana / カタカナ</Button>
      </div>
    </Hero>

    <Section
      title="Features"
      className="text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-400"
    >
      <FeatureList>
        <FeatureItem title="Mobile & Desktop" icon={<MobileIcon />}>
          Looks good and works well on a phone or desktop.
        </FeatureItem>
        <FeatureItem title="Offline Support" icon={<OfflineIcon />}>
          Practice at home or on the go. Works without a connection.
        </FeatureItem>
        <FeatureItem title="Focus" icon={<FocusIcon />}>
          Unlimited and distraction free so that you can focus on learning.
        </FeatureItem>
        <FeatureItem title="Dark Mode" icon={<DarkIcon />}>
          No eye strain. Detects your phone or desktop global dark mode setting.
        </FeatureItem>
        <FeatureItem title="Flash Cards" icon={<FlashCardIcon />}>
          Inspired by flash cards. A simple way to train your visual memory.
        </FeatureItem>
      </FeatureList>
    </Section>

    <Section
      title="How does it work?"
      className="text-teal-900 bg-teal-100 dark:bg-teal-400"
    >
      <ol className="max-w-md mx-auto mb-12 list-decimal list-inside">
        <li className="mb-4">
          <strong>Pick the kanas</strong> (hiraganas or katanas) that you want
          to practice.
        </li>
        <li className="mb-4">
          <strong>Type the matching Romaji</strong> (e.g. for "あ" type "a").
        </li>
        <li className="mb-4">
          <strong>Need help?</strong> Press Enter or click on the Card twice to
          get the answer. You can also view all kanas by clicking on "Kana
          List".
        </li>
      </ol>
    </Section>

    <Section title="About" className="text-purple-100 bg-purple-900">
      <footer className="container max-w-3xl mx-auto text-lg">
        <p className="mb-4">
          {siteName} is provided for free. If you like it, please leave a star
          on GitHub or share it on social networks.{' '}
        </p>
        <p className="mb-4">
          <a
            className="github-button"
            href={`https://github.com/${repoPath}`}
            data-icon="octicon-star"
            aria-label={`Star ${repoPath} on GitHub`}
          >
            Star
          </a>
        </p>
        <p className="mb-16">
          <strong>
            Are you looking for a React Developer{' '}
            <span role="img" aria-label="">
              ⚛️{' '}
            </span>
            to join your team?
          </strong>{' '}
          Feel free to drop me a message. I'm available for hire in France or
          Worldwide.
        </p>
        <p className="mb-4 text-base opacity-75">
          ©2020 {siteName}. All Rights Reserved. Created by{' '}
          <a href={authorUrl} className="underline cursor-pointer bold">
            Laffachan
          </a>
          .
        </p>
        <p className="text-base opacity-75">
          Credits: Illustrations provided by{' '}
          <a
            href="https://www.vexels.com/vectors/preview/178507/cute-japanese-character-set"
            className="underline cursor-pointer"
          >
            Vexels
          </a>
        </p>
      </footer>
    </Section>
  </>
)
