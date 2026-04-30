// ═══════════════════════════════════════════════════════════
// banks.js — Sistem Logo & Warna Bank untuk Laksa
// Berisi: database bank, auto-matching, dan logo rendering
// ═══════════════════════════════════════════════════════════

// ── DATABASE WARNA BRAND BANK ──
// Warna diekstrak dari file SVG logo resmi masing-masing bank
const BANKS = {
  // ── Bank BUMN ──
  bca:       {color:'#003399',c2:'#00297a',domain:'bca.co.id',logoScale:1.5},
  mandiri:   {color:'#003A70',c2:'#002a52',domain:'bankmandiri.co.id',logoScale:1.6},
  bni:       {color:'#E55300',c2:'#b84200',domain:'bni.co.id',logoScale:1.8},
  bri:       {color:'#00529C',c2:'#003d75',domain:'bri.co.id',logoScale:1.5},
  bsi:       {color:'#00A39D',c2:'#007d78',domain:'bankbsi.co.id',logoScale:1.6},
  btn:       {color:'#0069AB',c2:'#005088',domain:'btn.co.id',logoScale:1.5},

  // ── Bank Swasta Nasional ──
  mega:      {color:'#003B7B',c2:'#002d5e',domain:'bankmega.com',logoScale:1.6},
  danamon:   {color:'#046148',c2:'#034a37',domain:'danamon.co.id',logoScale:1.5},
  permata:   {color:'#0064FF',c2:'#0050cc',domain:'permatabank.com',slug:'permatabank',logoScale:1.7},
  permatabank:{color:'#0064FF',c2:'#0050cc',domain:'permatabank.com',logoScale:1.7},
  cimb:      {color:'#790008',c2:'#5e0006',domain:'cimbniaga.co.id',slug:'cimbniaga',logoScale:1.5},
  cimbniaga: {color:'#790008',c2:'#5e0006',domain:'cimbniaga.co.id',logoScale:1.5},
  bukopin:   {color:'#005BAA',c2:'#004488',domain:'bukopinfinance.co.id',logoScale:1.6},
  sinarmas:  {color:'#1A1A2E',c2:'#0f0f1c',domain:'banksinarmas.com',logoScale:1.5},
  muamalat:  {color:'#420655',c2:'#320440',domain:'ib.muamalatbank.com',logoScale:1.6},
  ocbc:      {color:'#D10A10',c2:'#a5080d',domain:'ocbc.id',slug:'ocbcnisp',logoScale:1.5},
  ocbcnisp:  {color:'#D10A10',c2:'#a5080d',domain:'ocbc.id',logoScale:1.5},
  victoria:  {color:'#C62828',c2:'#9e2020',domain:'victoriabank.co.id'},
  capital:   {color:'#003058',c2:'#002240',domain:'capitalfinancial.co.id'},
  mestika:   {color:'#282D68',c2:'#1e2250',domain:'bankmestika.co.id'},
  ganesha:   {color:'#4A4A4A',c2:'#363636',domain:'bankganesha.co.id'},
  maspion:   {color:'#ED1C24',c2:'#c2161d',domain:'maspion.com'},
  bumiartha: {color:'#234089',c2:'#1a306a',domain:'bankbba.co.id'},
  ina:       {color:'#292567',c2:'#1f1c4f',domain:'bankina.co.id'},
  indexselindo:{color:'#003C5D',c2:'#002d46',domain:'bankindexselindo.co.id'},
  mas:       {color:'#2C2730',c2:'#1e1a22',domain:'bankmas.co.id'},
  mncbank:   {color:'#223C77',c2:'#1a2e5c',domain:'www.mncfinancialservices.com'},
  nobubank:  {color:'#E20613',c2:'#b5050f',domain:'nobubank.com'},
  primabank: {color:'#0D92D2',c2:'#0a74a8',domain:'primabank.co.id'},
  sahabatsampoerna:{color:'#CC0000',c2:'#a30000',domain:'banksampoerna.com'},
  maybank:   {color:'#FFC800',c2:'#E5B400',domain:'maybank.co.id'},
  okbank:    {color:'#3D2D3C',c2:'#2e2230',domain:'okbank.co.id'},

  // ── Bank Digital ──
  jago:      {color:'#F28705',c2:'#d47000',domain:'jago.com',logoScale:1.4},
  'bank jago':{color:'#F28705',c2:'#d47000',domain:'jago.com',slug:'jago',logoScale:1.4},
  neo:       {color:'#FF9F00',c2:'#E68F00',domain:'bankneocommerce.co.id',logoScale:1.6},
  neobank:   {color:'#FF9F00',c2:'#E68F00',domain:'bankneocommerce.co.id',slug:'neo',logoScale:1.6},
  'bank neo':{color:'#FF9F00',c2:'#E68F00',domain:'bankneocommerce.co.id',slug:'neo',logoScale:1.6},
  aladin:    {color:'#1B21CC',c2:'#1218a0',domain:'aladinbank.id',logoScale:1.5},
  aladinbank:{color:'#1B21CC',c2:'#1218a0',domain:'aladinbank.id',slug:'aladin',logoScale:1.5},
  krom:      {color:'#6936D3',c2:'#5527b8',domain:'krom.id',slug:'krombank',isSquare:true},
  krombank:  {color:'#6936D3',c2:'#5527b8',domain:'krom.id',isSquare:true},
  blu:       {color:'#00B4C5',c2:'#008f9c',domain:'blu.co.id',logoScale:1.5},
  seabank:   {color:'#FFC53D',c2:'#E5B137',domain:'seabank.co.id',logoScale:1.5},
  superbank: {color:'#00C450',c2:'#00A040',domain:'superbank.id',logoScale:1.5},
  linebank:  {color:'#00C300',c2:'#009a00',domain:'linebank.co.id',logoScale:1.5},
  hibank:    {color:'#3D3D3D',c2:'#2a2a2a',domain:'hibank.co.id',logoScale:1.5},
  hi:        {color:'#3D3D3D',c2:'#2a2a2a',domain:'hibank.co.id',slug:'hibank',logoScale:1.5},
  raya:      {color:'#FF6400',c2:'#cc5000',domain:'bankraya.co.id',logoScale:1.5},
  saqu:      {color:'#4834D4',c2:'#3628a8',domain:'banksaqu.co.id',logoScale:1.5},
  salutgo:   {color:'#2AA7DE',c2:'#2186b2',domain:'salutbank.co.id',logoScale:1.5},

  // ── Bank Syariah ──
  btnsyariah:   {color:'#0069AC',c2:'#005088',domain:'btnsyariah.co.id'},
  btpnsyariah:  {color:'#7C6A55',c2:'#615340',domain:'btpnsyariah.co.id'},
  bcasyariah:   {color:'#0060AF',c2:'#004d8c',domain:'bcasyariah.co.id'},
  bcadigital:   {color:'#0060AF',c2:'#004d8c',domain:'bcadigital.co.id'},
  megasyariah:  {color:'#004B93',c2:'#003870',domain:'megasyariah.co.id'},
  danamonsyariah:{color:'#046148',c2:'#034a37',domain:'danamon.co.id'},
  cimbniagasyariah:{color:'#6A1F1D',c2:'#521816',domain:'cimbniaga.co.id'},
  bukopinsyariah:{color:'#59A544',c2:'#468336',domain:'www.kbbukopinsyariah.com'},
  sinarmassyariah:{color:'#009035',c2:'#00722a',domain:'banksinarmas.com',isSquare:true},
  victoriasyariah:{color:'#7CB342',c2:'#639035',domain:'bankbsn.co.id'},
  nanobanksyariah:{color:'#002657',c2:'#001c42',domain:'nanobanksyariah.id'},
  ntbsyariah: {color:'#0B6E45',c2:'#095636',domain:'www.bankntbsyariah.co.id'},
  panindubaisyariah:{color:'#2171B5',c2:'#1a5a91',domain:'ibb.pdsb.co.id'},
  paninsyariah:{color:'#006F39',c2:'#00542b',domain:'paninbanksyariah.co.id'},

  // ── Bank Regional ──
  dki:       {color:'#2E2524',c2:'#1f1918',domain:'bankdki.co.id',logoScale:1.8},
  jakarta:   {color:'#1A1A1A',c2:'#0d0d0d',domain:'bankjakarta.co.id',logoScale:1.6},
  ntt:       {color:'#00A550',c2:'#00823f',domain:'bpdntt.co.id',logoScale:1.6},
  nagari:    {color:'#2E2524',c2:'#1f1918',domain:'banknagari.co.id',logoScale:1.8},
  sultra:    {color:'#1565C0',c2:'#104e99',domain:'banksultra.co.id',isSquare:true,logoScale:1.8},
  sumsel:    {color:'#0077B3',c2:'#005c8c',domain:'banksumsel.co.id',isSquare:true,logoScale:1.8},
  sumut:     {color:'#0D47A1',c2:'#0a3780',domain:'banksumut.co.id',isSquare:true,logoScale:2.0},
  bws:       {color:'#0068AC',c2:'#005088',domain:'bankbws.co.id',logoScale:1.6},
  panin:     {color:'#004689',c2:'#003466',domain:'panin.co.id',slug:'paninbank',logoScale:1.6},
  paninbank: {color:'#007DC5',c2:'#00639d',domain:'panin.co.id',logoScale:1.6},

  // ── Bank Asing ──
  hsbc:      {color:'#DB0011',c2:'#b0000e',domain:'hsbc.co.id'},
  dbs:       {color:'#E21836',c2:'#b81229',domain:'dbs.co.id'},
  citibank:  {color:'#1C4882',c2:'#153868',domain:'citibank.co.id'},
  commonwealthbank:{color:'#1A1A1A',c2:'#0d0d0d',domain:'commbank.co.id'},
  anz:       {color:'#169CD4',c2:'#117ca9',domain:'anz.co.id'},
  bnpparibas:{color:'#00915A',c2:'#007347',domain:'bnpparibas.co.id'},
  bangkokbank:{color:'#1F4396',c2:'#183577',domain:'bangkokbank.co.id'},
  icbc:      {color:'#CB0202',c2:'#a20101',domain:'icbc.co.id'},
  ccbindonesia:{color:'#0066B1',c2:'#00518d',domain:'bankccbi.co.id'},
  chinaconstructionbankindonesia:{color:'#0066B1',c2:'#00518d',domain:'bankccbi.co.id'},
  ingbank:   {color:'#FF6600',c2:'#cc5200',domain:'ing.co.id'},
  mizuho:    {color:'#183181',c2:'#122567',domain:'mizuhobank.co.id'},
  mufg:      {color:'#E60000',c2:'#b80000',domain:'www.bk.mufg.jp'},
  deutschebank:{color:'#0018A8',c2:'#001286',domain:'db.co.id'},
  creditsuisse:{color:'#183964',c2:'#122c4e',domain:'credit-suisse.co.id'},
  ctbcbank:  {color:'#107C79',c2:'#0c5f5d',domain:'www.ctbcbank.com'},
  shinhanbank:{color:'#0046A6',c2:'#003785',domain:'shinhan.co.id'},
  ibkbank:   {color:'#0055A2',c2:'#004381',domain:'ibkbank.co.id'},
  hanabank:  {color:'#008A8B',c2:'#006d6e',domain:'hanabank.co.id'},
  jtrustbank:{color:'#009EE3',c2:'#007fb5',domain:'jtrustbank.co.id'},
  smbcindonesia:{color:'#134939',c2:'#0e372b',domain:'www.smbci.com',isSquare:true},
  ofamerica: {color:'#EE2A24',c2:'#bf221d',domain:'bankofamerica.co.id'},
  ofchina:   {color:'#B30738',c2:'#8f062d',domain:'bankofchina.co.id'},
  ofindia:   {color:'#EE7A00',c2:'#bf6200',domain:'boiindonesia.co.id'},
  oub:       {color:'#E1091D',c2:'#b40717',domain:'www.uob.co.id'},
  sbi:       {color:'#292075',c2:'#1f185a',domain:'www.sbiindo.com'},
  resona:    {color:'#009E5E',c2:'#007e4b',domain:'resona.co.id'},
  standartcartered:{color:'#006646',c2:'#004d35',domain:'sc.co.id'},
  jpmorganchaseandco:{color:'#003087',c2:'#00256b',domain:'jpmorgan.co.id'},
  arthagrahainternasional:{color:'#A28548',c2:'#826a3a',domain:'arthagraha.co.id'},
  allobank:  {color:'#1A1A1A',c2:'#0d0d0d',domain:'allobank.com'},

  // ── E-Wallet & Digital Payment ──
  jenius:    {color:'#2B5592',c2:'#1d3d70',domain:'jenius.com'},
  gopay:     {color:'#00ACEA',c2:'#008bbf',domain:'gopay.co.id'},
  ovo:       {color:'#6231A0',c2:'#4e2680',domain:'ovo.id'},
  dana:      {color:'#118EEA',c2:'#0d72c0',domain:'dana.id'},
  shopeepay: {color:'#EE4D2D',c2:'#c93b1e',domain:'shopee.co.id'},
  shopee:    {color:'#EE4D2D',c2:'#c93b1e',domain:'shopee.co.id',slug:'shopeepay'},

  // ── Kas/Tunai ──
  tunai:     {color:'#34d399',c2:'#10b981',domain:null},
  cash:      {color:'#34d399',c2:'#10b981',domain:null},
  dompet:    {color:'#5c6ac4',c2:'#4355b9',domain:null,isWallet:true},
  kas:       {color:'#d4920a',c2:'#a87200',domain:null}
};

// ── DAFTAR SEMUA FILE SVG ──
const SVG_FILES = [
  'aladin','allobank','anz','arthagrahainternasional','bangkokbank',
  'bca','bcadigital','bcasyariah','blu','bni','bnpparibas','bri','bsi',
  'btn','btnsyariah','btpnsyariah','bukopin','bukopinsyariah','bumiartha',
  'bws','capital','ccbindonesia','chinaconstructionbankindonesia',
  'cimbniaga','cimbniagasyariah','citibank','commonwealthbank','creditsuisse',
  'ctbcbank','danamon','danamonsyariah','dbs','deutschebank','dki',
  'ganesha','hanabank','hibank','hsbc','ibkbank','icbc','ina','indexselindo',
  'ingbank','jago','jakarta','jenius','jpmorganchaseandco',
  'jtrustbank','krombank','linebank','mandiri','mas','maspion','maybank',
  'mega','megasyariah','mestika','mizuho','mncbank','muamalat','mufg',
  'nagari','nanobanksyariah','neo','nobubank','ntbsyariah','ntt','ocbcnisp',
  'ofamerica','ofchina','ofindia','okbank','oub','paninbank',
  'panindubaisyariah','permatabank','primabank','privatebank','raya',
  'regionalbank','resona','sahabatsampoerna','salutgo','saqu','sbi','seabank',
  'shinhanbank','sinarmas','sinarmassyariah','smbcindonesia','standartcartered',
  'sultra','sumsel','sumut','superbank','victoria','victoriasyariah'
];

// ── FAVICON CACHE (localStorage persistent) ──
const _FAV_CACHE_KEY = 'laksa_fav_cache_v4';
let _favCache = {};
try { _favCache = JSON.parse(localStorage.getItem(_FAV_CACHE_KEY) || '{}'); } catch {}

window._loadBankLogo = async function(img) {
  if (img.dataset.loaded === '1') return;
  img.dataset.loaded = '1';

  const useFav = img.dataset.faviconMode === 'true';
  const svgSrc = img.dataset.svgSrc;
  const favDom = img.dataset.fdom;
  const initClass = img.dataset.fbClass;
  const isGuessed = img.dataset.guessed === 'true';

  const showInit = () => {
    img.style.display = 'none';
    if (img.nextElementSibling && img.nextElementSibling.classList.contains(initClass)) {
      img.nextElementSibling.style.display = 'flex';
    }
  };

  const fetchFav = async (domain) => {
    if (!domain) return null;
    if (_favCache[domain]) return _favCache[domain];
    try {
      const res = await fetch(`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`);
      if (!res.ok) return null;
      const blob = await res.blob();
      if (blob.size <= 750) return null; // Tolak default broken globe dari Google (~726 bytes)
      return await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => {
          _favCache[domain] = reader.result;
          try { localStorage.setItem(_FAV_CACHE_KEY, JSON.stringify(_favCache)); } catch{}
          resolve(reader.result);
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
      });
    } catch(e) { return null; }
  };

  const tryImg = (src) => new Promise(resolve => {
    if (!src) return resolve(false);
    const temp = new Image();
    temp.onload = () => resolve(true);
    temp.onerror = () => resolve(false);
    temp.src = src;
  });

  if (useFav) {
    let fav = await fetchFav(favDom);
    if (!fav && isGuessed && favDom && favDom.endsWith('.co.id')) fav = await fetchFav(favDom.replace('.co.id', '.com'));
    if (fav) { img.src = fav; return; }
    if (await tryImg(svgSrc)) { img.src = svgSrc; return; }
    showInit();
  } else {
    if (await tryImg(svgSrc)) { img.src = svgSrc; return; }
    let fav = await fetchFav(favDom);
    if (!fav && isGuessed && favDom && favDom.endsWith('.co.id')) fav = await fetchFav(favDom.replace('.co.id', '.com'));
    if (fav) { img.src = fav; return; }
    showInit();
  }
};

// ── FUNGSI DETEKSI BANK ──
const detBank = (name) => {
  let n = (name || '').toLowerCase().trim();

  // 1. Alias untuk nama resmi/panjang yang berbeda jauh dari nama file
  const aliases = {
    'central asia syariah':'bcasyariah','central asia':'bca',
    'rakyat indonesia':'bri','negara indonesia':'bni',
    'syariah indonesia':'bsi','tabungan negara syariah':'btnsyariah',
    'tabungan negara':'btn','go-pay':'gopay','neo commerce':'neo',
    'artha bumi':'bumiartha','bumi artha':'bumiartha',
    'artha graha':'arthagrahainternasional',
    'china construction':'chinaconstructionbankindonesia',
    'jpmorgan':'jpmorganchaseandco','standard chartered':'standartcartered',
    'panin dubai syariah':'panindubaisyariah'
  };
  let forcedSlug = null, aLen = 0;
  for (let a in aliases) {
    if (n.includes(a) && a.length > aLen) { forcedSlug = aliases[a]; aLen = a.length; }
  }

  // 2. Bersihkan nama (hapus kata "bank", spasi, karakter khusus)
  const nClean = n.replace(/\bbank\b/gi, '').trim().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');

  if (forcedSlug) {
    const b = BANKS[forcedSlug] || { color: null, c2: null, domain: forcedSlug + '.co.id' };
    return { ...b, slug: forcedSlug };
  }

  // 3. Cari di BANKS database (exact + partial match, syariah-safe)
  let best = null, bestLen = 0, bestK = null;
  const isSyariah = nClean.includes('syariah');
  for (const [k, b] of Object.entries(BANKS)) {
    const kClean = k.replace(/\bbank\b/g, '').replace(/[^a-z0-9]/g, '');
    if (!kClean) continue;
    const kHasSyariah = kClean.includes('syariah');
    const exact = (nClean === kClean);
    const partial = nClean.includes(kClean) && (isSyariah === kHasSyariah);
    if ((exact || partial) && kClean.length > bestLen) {
      best = b; bestLen = kClean.length; bestK = kClean;
    }
  }
  if (best) return { ...best, slug: best.slug || bestK };

  // 4. Auto-match: cari file SVG terbaik dari daftar file yang tersedia
  let bestFile = null, bestScore = 0;
  for (const f of SVG_FILES) {
    let score = 0;
    const fStrip = f.replace(/bank/g, '');
    if (nClean === f || nClean === fStrip) { score = 10000; }
    else if ((f.includes(nClean) || fStrip.includes(nClean)) && nClean.length >= 3) { score = 5000 + nClean.length; }
    else if ((nClean.includes(f) || nClean.includes(fStrip)) && f.length >= 3 && fStrip.length >= 3) {
      const fSy = f.includes('syariah');
      if (isSyariah === fSy) score = 3000 + f.length;
    }
    if (score > bestScore) { bestScore = score; bestFile = f; }
  }
  if (bestFile && bestScore >= 3000) {
    const b = BANKS[bestFile] || { color: null, c2: null, domain: bestFile + '.co.id' };
    return { ...b, slug: bestFile };
  }

  // 5. Dompet/wallet detection
  if (/dompet|tunai|cash|wallet|kas/i.test(n))
    return { color: '#5c6ac4', c2: '#4355b9', domain: null, isWallet: true, slug: nClean };

  // 6. Fallback — tetap set slug agar getLogoHtml bisa mencoba load SVG
  const slug = nClean || 'unknown';
  return { color: null, c2: null, domain: slug + '.co.id', guessed: true, slug: slug };
};

// ⚡ FUNGSI RENDER LOGO ⚡
function getLogoHtml(accName, b, imgClass, fbClass, imgStyle = '', useFavicon = false) {
  const init = (accName.replace(/[^a-zA-Z0-9]/g, '').slice(0, 3) || '?').toUpperCase();
  const slug = b && b.slug ? b.slug : (b && b.domain ? b.domain.split('.')[0] : null);
  const domain = b && b.domain ? b.domain : null;

  if (!slug && !domain) return `<div class="${fbClass}" style="display:flex">${init}</div>`;

  const scale = (b && b.logoScale) ? b.logoScale : 1.45;
  const scaleStyle = `transform:scale(${scale});transform-origin:center center;`;
  const finalStyle = imgStyle ? `${imgStyle}${scaleStyle}` : scaleStyle;

  const svgSrc = `Banks%20Logo/${slug}.svg`;
  const favDomain = domain || (slug + '.co.id');
  const isGuessed = !domain;
  const blankGif = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  return `<img class="${imgClass}" src="${blankGif}" alt="" style="${finalStyle}"
    data-svg-src="${svgSrc}" data-fdom="${favDomain}" data-guessed="${isGuessed}" 
    data-favicon-mode="${useFavicon}" data-fb-class="${fbClass}"
    onload="window._loadBankLogo(this)" />
    <div class="${fbClass}" style="display:none">${init}</div>`;
}
