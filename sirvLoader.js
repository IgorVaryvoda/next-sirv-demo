export default function SirvLoader({ src, width, quality }) {
    const url = new URL(`https://demo.sirv.com${src}`)
    const params = url.searchParams
    params.set('format', params.getAll('format').join(',') || 'optimal')
    params.set('w', params.get('w') || width.toString())
    params.set('q', (quality || 85).toString())
    return url.href
}