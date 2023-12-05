import { fakerRU as faker } from '@faker-js/faker'

function generateFakeNewsList(newsCount: number) :TNewsItem[] {
    const arr = [];
    for (let i = 0; i < newsCount; i++) {
        arr.push({
            icon: faker.image.avatar(),
            text: faker.lorem.sentence(),
            link: faker.internet.url(),
        })
    }
    return arr
}

function generateFakeCurrency (currencyCount : number) :TCurrencyItem[] {
    const arr = [];
    for (let i = 0; i < currencyCount; i++) {
        arr.push({
            currencyCode: faker.finance.currencyCode(),
            currencyValue: faker.number.float({ min: 10, max: 100, precision: 0.01 }),
        })
    }
    return arr
}

function generateFakeLinksList(newsCount: number) :TLinkItem[] {
    const arr = [];
    for (let i = 0; i < newsCount; i++) {
        arr.push({
            title: faker.lorem.word(),
            url: faker.internet.url(),
        })
    }
    return arr
}

function generateFakeTabList(newsCount: number) :TTabItem[] {
    const arr = [];
    for (let i = 0; i < newsCount; i++) {
        arr.push({
            title: faker.lorem.word(),
            text: faker.lorem.sentence()
        })
    }
    return arr
}

export type TTabItem = {
    title: string,
    text: string
}

export type TNewsItem = {
    icon: string,
    text: string,
    link: string
}

export type TCurrencyItem = {
    currencyCode: string,
    currencyValue: number
}

export type CurrencyProps = {
    datas: TCurrencyItem[]
}

export type TLinkItem = {
    title: string,
    url: string
}

export type TBanner = {
    link: string,
    img: string
}

export const fakeNowInSMI = generateFakeNewsList(5);
export const fakeInGermany = generateFakeNewsList(5);
export const fakeRecomended = generateFakeNewsList(5);
export const fakeCurrency = generateFakeCurrency(3);
export const links = generateFakeLinksList(6);
export const tabs = generateFakeTabList(5);
