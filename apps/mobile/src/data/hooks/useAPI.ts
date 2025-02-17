import { useCallback } from 'react'

const URL_BASE = 'http://172.19.176.1:3001' // process.env.URL_BASE

export default function useAPI() {
    const httpGet = useCallback(async function (uri: string): Promise<any> {
        const res = await fetch(`${URL_BASE}/${uri}`)
        const data = await res.json()
        return data
    }, [])

    const httpPost = useCallback(async function (uri: string, body: any): Promise<any> {
        await fetch(`${URL_BASE}/${uri}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    }, [])

    return { httpGet, httpPost }
}
