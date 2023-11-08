export default function SirvLoader({ src, width, quality, blur, sharpen }) {
  const url = new URL(`https://demo.sirv.com${src}`);
  const params = url.searchParams;

  params.set('format', params.get('format') || 'optimal');
  params.set('w', width.toString());
  params.set('q', quality.toString());

  return url.href;
}


