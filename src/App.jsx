import { useEffect, useState } from 'react'
import {
  Award,
  BadgeCheck,
  Bird,
  ChevronDown,
  ChevronRight,
  Feather,
  HelpCircle,
  HeartPulse,
  Leaf,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Shield,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react'
import productImage from './assets/premium-pigeon-mix-20kg.png'
import blackMixImage from './assets/classic-black-mix-contents.png'
import blueMixImage from './assets/premium-blue-mix-contents.png'
import mashProductImage from './assets/natural-pigeon-mash-1kg-product.png'
import mashDetailImage from './assets/natural-pigeon-mash-1kg-detail.png'
import logoImage from './assets/masterpigeon-logo.png'
import { formatTrPhone, telLink } from './utils/phone.js'

const NAV_LINKS = [
  { href: '#', label: 'Ana Sayfa', id: 'hero' },
  {
    href: '#urun',
    label: 'Ürünler',
    id: 'urun',
    children: [
      { href: '#urun-siyah', label: 'Siyah Güvercin Yemi', id: 'urun-siyah' },
      { href: '#urun-lacivert', label: 'Lacivert Güvercin Yemi', id: 'urun-lacivert' },
      { href: '#urun-mama', label: 'Güvercin Maması', id: 'urun-mama' },
    ],
  },
  { href: '#kalite', label: 'Kalite', id: 'kalite' },
  { href: '#bayilik', label: 'Bayilik', id: 'bayilik' },
  { href: '#sss', label: 'SSS', id: 'sss' },
  { href: '#iletisim', label: 'İletişim', id: 'iletisim' },
]

const FOOTER_GROUPS = [
  {
    title: 'Keşfet',
    links: [
      { href: '#urun', label: 'Tüm Ürünler' },
      { href: '#urun-siyah', label: 'Siyah Güvercin Yemi' },
      { href: '#urun-lacivert', label: 'Lacivert Güvercin Yemi' },
      { href: '#urun-mama', label: 'Güvercin Maması' },
      { href: '#kalite', label: 'Üretim Kalitesi' },
    ],
  },
  {
    title: 'Destek',
    links: [
      { href: '#bayilik', label: 'Toptan Bayilik' },
      { href: '#sss', label: 'Sık Sorulan Sorular' },
      { href: '#iletisim', label: 'İletişim' },
    ],
  },
]

function SectionLabel({ children }) {
  return (
    <p className="section-label text-xs font-semibold uppercase text-brand-gold">
      {children}
    </p>
  )
}

function FaqItem({ item, isOpen, onToggle }) {
  const Icon = item.icon
  return (
    <article
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? 'border-brand-gold/30 bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
        aria-expanded={isOpen}
      >
        <span className="inline-flex shrink-0 rounded-sm bg-brand-gold/10 p-2.5 text-brand-gold">
          <Icon size={18} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-2 inline-block rounded-sm border border-brand-gold/20 bg-brand-gold/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
            {item.category}
          </span>
          <span className="block text-sm font-bold leading-snug text-white sm:text-base">
            {item.q}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-white/10 px-5 pb-5 sm:px-6 sm:pb-6">
          <p className="ml-[52px] text-sm leading-relaxed text-gray-300">{item.a}</p>
          {item.tip && (
            <p className="ml-[52px] mt-3 rounded-sm border border-brand-gold/15 bg-brand-gold/5 px-3 py-2 text-xs leading-relaxed text-brand-gold/90">
              {item.tip}
            </p>
          )}
        </div>
      )}
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mixMenuOpen, setMixMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [openFaq, setOpenFaq] = useState(0)

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '905534242228'
  const dealershipPhone =
    import.meta.env.VITE_DEALERSHIP_PHONE ?? '905534242228'

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba, Master Pigeon ürünleri hakkında bilgi almak istiyorum.')}`
  const mashWhatsApp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba, Master Pigeon Güvercin Maması 1 KG hakkında bilgi almak istiyorum.')}`
  const siyahWhatsApp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba, Master Pigeon Siyah Güvercin Yemi 20 KG hakkında bilgi almak istiyorum.')}`
  const lacivertWhatsApp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba, Master Pigeon Lacivert Güvercin Yemi 20 KG hakkında bilgi almak istiyorum.')}`
  const dealershipWhatsApp = `https://wa.me/${dealershipPhone}?text=${encodeURIComponent('Merhaba, Master Pigeon toptan bayilik hakkında bilgi almak istiyorum.')}`
  const dealershipTel = telLink(dealershipPhone)
  const dealershipDisplay = formatTrPhone(dealershipPhone)
  const whatsappDisplay = formatTrPhone(whatsappNumber)

  const benefits = [
    {
      title: 'Doğal İçerik',
      description: 'Seçilmiş tahıl ve tohum karışımıyla doğal beslenme desteği.',
      icon: Leaf,
    },
    {
      title: 'Güçlü Bağışıklık',
      description: 'Vitamin ve mineral takviyeli formül ile kondisyon desteği.',
      icon: Shield,
    },
    {
      title: 'Parlak Tüy Yapısı',
      description: 'Dengeli içerik ile tüy kalitesini destekleyen premium karışım.',
      icon: Feather,
    },
    {
      title: 'Sağlıklı Gelişim',
      description: 'Günlük enerji ihtiyacını karşılayan dengeli beslenme profili.',
      icon: HeartPulse,
    },
  ]

  const stats = [
    { value: '3', label: 'Premium Ürün' },
    { value: '20 KG', label: 'Güvercin Yemi' },
    { value: '1 KG', label: 'Güvercin Maması' },
    { value: 'ISO', label: '9001 Kalite' },
  ]

  const products = [
    {
      id: 'urun-siyah',
      name: 'Siyah Güvercin Yemi',
      weight: '20 KG',
      tag: 'Kısa Gagalı Güvercinler',
      pack: 'Classic Siyah Ambalaj',
      description:
        'Küçük taneli, bezelyesiz formül. Kısa gagalı güvercinler ve dengeli günlük beslenme için ideal tahıl karışımı.',
      image: blackMixImage,
      imageAlt: 'Siyah Güvercin Yemi — Classic Siyah paket içeriği',
      features: ['Bezelyesiz formül', 'Küçük taneli karışım', '10+ premium bileşen'],
      cardBorder: 'border-neutral-700/60 hover:border-neutral-500/60',
      cardBg: 'from-neutral-900/60 to-brand-black',
      tagStyle: 'border-neutral-600 bg-neutral-800 text-gray-200',
      dot: 'bg-neutral-900 ring-neutral-500',
      accentText: 'text-brand-gold',
      whatsapp: siyahWhatsApp,
    },
    {
      id: 'urun-lacivert',
      name: 'Lacivert Güvercin Yemi',
      weight: '20 KG',
      tag: 'Performans Dönemi',
      pack: 'Premium Lacivert Ambalaj',
      description:
        'Bezelye ve zenginleştirilmiş mısır içeren geniş besin profilli karışım. Performans ve kondisyon dönemlerine uygun.',
      image: blueMixImage,
      imageAlt: 'Lacivert Güvercin Yemi — Premium Lacivert paket içeriği',
      features: ['10+ premium bileşen', 'Bezelye destekli formül', 'Performans odaklı karışım'],
      cardBorder: 'border-brand-navy-light/50 hover:border-brand-navy-light/80',
      cardBg: 'from-brand-navy/50 to-brand-black',
      tagStyle: 'border-brand-navy-light bg-brand-navy/80 text-blue-100',
      dot: 'bg-brand-navy ring-brand-navy-light',
      accentText: 'text-brand-gold',
      whatsapp: lacivertWhatsApp,
    },
    {
      id: 'urun-mama',
      name: 'Güvercin Maması',
      weight: '1 KG',
      tag: '%100 Doğal',
      pack: 'Toz Form Mama',
      description:
        'Yavru gelişimi ve büyüme desteği için vitamin-mineral takviyeli doğal mama. Kolay sindirilebilir toz formül.',
      image: mashProductImage,
      imageAlt: 'Güvercin Maması — %100 Doğal 1 KG ambalaj',
      features: ['Vitamin & mineral takviyeli', 'Kolay sindirilebilir', 'Yavru gelişim desteği'],
      cardBorder: 'border-emerald-500/30 hover:border-emerald-500/50',
      cardBg: 'from-emerald-950/40 to-brand-black',
      tagStyle: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
      dot: 'bg-emerald-500 ring-emerald-400',
      accentText: 'text-emerald-400',
      whatsapp: mashWhatsApp,
    },
  ]

  const mashBenefits = [
    { title: 'Doğal & Güvenli', description: 'Katkısız, koruyucusuz %100 doğal içerik profili.', icon: Leaf },
    { title: 'Bağışıklık Desteği', description: 'Güçlü ve sağlıklı yavru gelişimini destekler.', icon: Shield },
    { title: 'Vitamin & Mineral', description: 'Dengeli ve zengin besin içeriği ile tam destek.', icon: Sparkles },
    { title: 'Kolay Sindirilebilir', description: 'Hafif ve besleyici toz yapı, yavrular için ideal.', icon: HeartPulse },
  ]

  const mashIngredients = [
    'Mercimek', 'Risört', 'Beyaz Sorghum', 'Kırmızı Sorghum', 'Yeşil Bezelye',
    'Mısır', 'Aspir', 'Sarı Bezelye', 'Pirinç Risört', 'Bulgur Risört',
    'Patlamış Mısır', 'Fiğ Tohumu', 'Mineral & Vitamin',
  ]

  const orderSteps = [
    {
      step: '01',
      title: 'Formül Seçin',
      text: 'Siyah Güvercin Yemi, Lacivert Güvercin Yemi veya Güvercin Maması arasından ihtiyacınıza uygun ürünü belirleyin.',
    },
    {
      step: '02',
      title: 'İletişime Geçin',
      text: 'WhatsApp veya telefon ile sipariş veya bayilik talebinizi iletin.',
    },
    {
      step: '03',
      title: 'Teslimat & Destek',
      text: 'Sipariş onayı sonrası teslimat planı ve süreç bilgisi paylaşılır.',
    },
  ]

  const faqs = [
    {
      category: 'Güvercin Maması',
      icon: HeartPulse,
      q: 'Güvercin maması ile güvercin yemi arasındaki fark nedir?',
      a: 'Siyah ve Lacivert Güvercin Yemi; günlük tahıl ve tohum karışımıdır, yetişkin güvercinlerin ana yemidir. Güvercin Maması ise toz formda, su ile karıştırılarak verilen; özellikle yavru gelişimi, büyüme dönemi ve ek beslenme desteği için geliştirilmiş bir mamadır.',
      tip: 'Yavru beslenmesi için Güvercin Maması 1 KG ürününü tercih edin.',
    },
    {
      category: 'Ürün Seçimi',
      icon: Package,
      q: 'Siyah mı, Lacivert güvercin yemi mi tercih etmeliyim?',
      a: 'Siyah Güvercin Yemi; küçük taneli, bezelyesiz yapısıyla özellikle kısa gagalı güvercinler ve dengeli günlük beslenme arayan yetiştiriciler için idealdir. Lacivert Güvercin Yemi ise bezelye ve zenginleştirilmiş mısır içeren, daha geniş besin profilli formülüyle performans dönemlerine uygundur.',
      tip: 'Kısa gagalı güvercinler için Siyah Güvercin Yemi önerilir — bezelyesiz, küçük taneli karışım.',
    },
    {
      category: 'Formül',
      icon: Leaf,
      q: 'Karışımda kaç farklı bileşen bulunuyor?',
      a: 'Her iki formülümüz de 10\'dan fazla seçilmiş tahıl, tohum ve destekleyici bileşenden oluşur. Sitede öne çıkanlar, formülün temel karakterini yansıtan ana bileşenlerdir; tam reçete ticari gizlilik kapsamında korunur.',
    },
    {
      category: 'Kısa Gagalı',
      icon: Bird,
      q: 'Siyah paket neden kısa gagalı güvercinler için öneriliyor?',
      a: 'Classic Siyah karışım; küçük taneli yapısı sayesinde kısa gagalı güvercinlerin rahatça tüketebileceği boyutta hazırlanır. Bezelye içermez; bu sayede gagalı küçük ırklarda sindirim ve tüketim kolaylığı sağlar.',
      tip: 'Bezelyesiz · Küçük taneli · Kısa gagalı güvercinlere özel',
    },
    {
      category: 'Bayilik',
      icon: Truck,
      q: 'Toptan bayilik ve bölgesel satış nasıl yapılır?',
      a: 'Petshop, yetiştirici ve bayi adayları +90 553 424 22 28 numaralı bayilik hattından veya WhatsApp üzerinden doğrudan ulaşabilir. Bölgesel bayilik, toptan fiyatlandırma ve düzenli sevkiyat koşulları görüşme sonrası paylaşılır.',
    },
    {
      category: 'Kalite',
      icon: Shield,
      q: 'Üretim ve kalite güvencesi nasıl sağlanıyor?',
      a: 'Master Pigeon üretimi HACCP ve ISO 9001 kalite anlayışıyla yürütülür. Hammadde girişinden ambalajlamaya kadar kontrollü süreçler uygulanır; her parti aynı premium standardı hedefler.',
    },
    {
      category: 'Sipariş',
      icon: MessageCircle,
      q: 'Sipariş vermek için ne yapmam gerekiyor?',
      a: 'Perakende siparişler için WhatsApp hattımızdan ürün tercihinizi (Siyah Yem, Lacivert Yem veya Mama) ve miktarınızı iletmeniz yeterlidir. Toptan talepler için bayilik hattını arayabilirsiniz.',
    },
    {
      category: 'Beslenme',
      icon: Feather,
      q: 'Günlük kullanımda nelere dikkat etmeliyim?',
      a: 'Karışımı kuru ve serin ortamda saklayın, taze su sunumunu ihmal etmeyin. Güvercin sayısı, yaşı ve dönem (eğitim, yarış, dinlenme) beslenme miktarını etkiler; emin olmadığınız durumlarda iletişim hattımızdan yönlendirme alabilirsiniz.',
    },
    {
      category: 'Teslimat',
      icon: HelpCircle,
      q: 'Minimum sipariş ve teslimat süreci nasıl işliyor?',
      a: 'Perakende ve toptan sipariş koşulları talep türüne göre değişir. Sipariş onayı sonrası teslimat planı, fiyat ve ödeme bilgileri size doğrudan iletilir.',
    },
  ]

  const mixVariants = [
    {
      id: 'urun-siyah',
      title: 'Siyah Güvercin Yemi',
      badge: 'Classic Siyah · 20 KG',
      badgeDot: 'bg-neutral-900 ring-neutral-500',
      badgeBorder: 'border-neutral-600 bg-neutral-900',
      image: blackMixImage,
      imageAlt: 'Siyah Güvercin Yemi — seçilmiş tahıl ve tohum karışımı',
      caption: 'Bezelyesiz · Küçük Taneli · 10+ Bileşen',
      description:
        'Siyah Güvercin Yemi; kısa gagalı güvercinler için özel olarak hazırlanmış, küçük taneli ve bezelyesiz bir formüldür. 10\'dan fazla seçilmiş tahıl ve tohumdan oluşur.',
      callout:
        'Kısa gagalı güvercinler için özel: küçük taneli, bezelyesiz karışım — kolay tüketim, dengeli beslenme.',
      glowClass: 'ingredient-showcase-glow',
      panelGradient: 'from-neutral-900/80 via-brand-black to-brand-black',
      imageFirst: true,
      ingredientsNote: 'Formülümüz 10+ bileşenden oluşur. Öne çıkan ana bileşenler:',
      ingredients: [
        { name: 'Ayçiçeği Tohumu', detail: 'Enerji ve yağ dengesi için seçilmiş beyaz çekirdek.', color: 'bg-stone-200' },
        { name: 'Darı & Küçük Tahıllar', detail: 'Günlük beslenmede sindirilebilirlik ve hacim desteği.', color: 'bg-amber-200' },
        { name: 'Mısır Tanesi', detail: 'Doğal karbonhidrat kaynağı ile performans desteği.', color: 'bg-yellow-400' },
        { name: 'Kırmızı Tohum Karışımı', detail: 'Protein ve renk çeşitliliği sağlayan premium bileşen.', color: 'bg-red-800' },
        { name: 'Siyah Tahıl & Tohum', detail: 'Formülün mineral dengesini tamamlayan koyu taneler.', color: 'bg-neutral-800' },
      ],
      stats: [
        { value: '10+', label: 'Karışım Bileşeni' },
        { value: 'Bezelyesiz', label: 'Formül Yapısı' },
        { value: '20 KG', label: 'Endüstriyel Ambalaj' },
      ],
    },
    {
      id: 'urun-lacivert',
      title: 'Lacivert Güvercin Yemi',
      badge: 'Premium Lacivert · 20 KG',
      badgeDot: 'bg-brand-navy ring-brand-navy-light',
      badgeBorder: 'border-brand-navy-light bg-brand-navy/80',
      image: blueMixImage,
      imageAlt: 'Lacivert Güvercin Yemi — zenginleştirilmiş tahıl, baklagil ve tohum karışımı',
      caption: 'Zenginleştirilmiş · 10+ Bileşen',
      description:
        'Lacivert Güvercin Yemi; yeşil bezelye, sarı ve mor mısır ile 10\'dan fazla seçilmiş tahıl ve tohumdan oluşan zenginleştirilmiş bir formüldür.',
      callout: null,
      glowClass: 'ingredient-showcase-glow-blue',
      panelGradient: 'from-brand-navy/40 via-brand-black to-brand-black',
      imageFirst: false,
      ingredientsNote: 'Formülümüz 10+ bileşenden oluşur. Öne çıkan ana bileşenler:',
      ingredients: [
        { name: 'Yeşil Bezelye', detail: 'Bitkisel protein ve lif dengesi sağlayan premium baklagil.', color: 'bg-green-600' },
        { name: 'Sarı & Mor Mısır', detail: 'Enerji desteği ve formül çeşitliliği için çift taneli mısır.', color: 'bg-yellow-400' },
        { name: 'Ayçiçeği Tohumu', detail: 'Yağ ve enerji dengesini destekleyen seçilmiş çekirdek.', color: 'bg-stone-200' },
        { name: 'Darı & Küçük Tahıllar', detail: 'Sindirilebilirlik ve günlük beslenme hacmi için temel tahıl.', color: 'bg-amber-200' },
        { name: 'Mor Tohum & Siyah Tahıl', detail: 'Mineral ve renk çeşitliliği katan premium bileşenler.', color: 'bg-purple-900' },
        { name: 'Siyah Tohum Karışımı', detail: 'Formülün besin yoğunluğunu tamamlayan koyu taneler.', color: 'bg-neutral-800' },
      ],
      stats: [
        { value: '10+', label: 'Karışım Bileşeni' },
        { value: '%100', label: 'Doğal İçerik' },
        { value: '20 KG', label: 'Endüstriyel Ambalaj' },
      ],
    },
  ]

  const credentials = [
    { label: 'HACCP Sertifikalı', icon: BadgeCheck },
    { label: 'ISO 9001 Kalite', icon: Award },
    { label: 'Premium Quality', icon: Star },
    { label: '3 Ürün Portföyü', icon: Shield },
  ]

  const closeMenu = () => {
    setMenuOpen(false)
    setMixMenuOpen(false)
  }

  useEffect(() => {
    const sectionIds = [
      'hero',
      'urun',
      'urun-siyah',
      'urun-lacivert',
      'urun-mama',
      'kalite',
      'bayilik',
      'sss',
      'iletisim',
    ]

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const navLinkClass = (id) =>
    `text-xs font-semibold uppercase tracking-wider transition ${
      activeSection === id || (id === 'urun' && ['urun-siyah', 'urun-lacivert', 'urun-mama'].includes(activeSection))
        ? 'text-brand-gold'
        : 'text-gray-400 hover:text-brand-gold'
    }`

  return (
    <div className="relative min-h-screen bg-brand-black text-gray-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(26,43,86,0.55),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent_35%)]" />

      <header className="glass-nav sticky top-0 z-40 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="shrink-0" aria-label="Master Pigeon ana sayfa">
            <img src={logoImage} alt="Master Pigeon logosu" className="h-12 w-auto sm:h-14" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="nav-dropdown group relative">
                  <a href={link.href} className={`inline-flex items-center gap-1 px-3 py-2 ${navLinkClass(link.id)}`}>
                    {link.label}
                    <ChevronDown size={14} className="transition group-hover:rotate-180" />
                  </a>
                  <div className="nav-dropdown-panel absolute left-0 top-full z-50 min-w-[220px] pt-2 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <div className="overflow-hidden rounded-sm border border-white/10 bg-brand-black/95 shadow-xl backdrop-blur">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className={`block border-b border-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider last:border-0 ${
                            activeSection === child.id
                              ? 'bg-brand-gold/10 text-brand-gold'
                              : 'text-gray-300 hover:bg-white/5 hover:text-brand-gold'
                          }`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} className={`px-3 py-2 ${navLinkClass(link.id)}`}>
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              className="hidden rounded-sm bg-brand-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light sm:inline-flex"
            >
              Sipariş Ver
            </a>
            <button
              type="button"
              className="inline-flex rounded-sm border border-white/15 p-2 text-gray-300 lg:hidden"
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-brand-black/95 px-4 py-4 lg:hidden" aria-label="Mobil menü">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMixMenuOpen((open) => !open)}
                      className="flex w-full items-center justify-between rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition ${mixMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mixMenuOpen && (
                      <div className="mb-2 ml-3 border-l border-brand-gold/20 pl-3">
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="block rounded-sm px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-brand-gold"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:bg-white/5 hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <a
                href={whatsappLink}
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-4 py-3 text-sm font-bold uppercase tracking-wider text-brand-black"
              >
                <MessageCircle size={18} />
                Sipariş Ver
              </a>
              <a
                href={dealershipTel}
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 px-4 py-3 text-sm font-bold uppercase tracking-wider text-brand-gold"
              >
                <Phone size={18} />
                Bayilik Hattı
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="relative mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <section id="hero" className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="animate-fade-up">
            <SectionLabel>Master Pigeon</SectionLabel>
            <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.1] tracking-wide text-white sm:text-5xl lg:text-6xl">
              Premium <span className="brand-gradient-text">Güvercin Beslenme</span>
            </h1>
            <p className="mt-3 text-lg font-semibold uppercase tracking-[0.18em] text-brand-gold sm:text-xl">
              3 Premium Ürün
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Güvercin yetiştiriciliğinde profesyonel beslenme çözümleri.
              <strong className="font-semibold text-white"> Siyah</strong> ve
              <strong className="font-semibold text-white"> Lacivert Güvercin Yemi</strong> — 20 KG
              tahıl karışımları.
              <strong className="font-semibold text-emerald-300"> Güvercin Maması</strong> — 1 KG
              yavru gelişimi için doğal toz form mama.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {credentials.map((item) => {
                const Icon = item.icon
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-gray-200"
                  >
                    <Icon size={14} className="text-brand-gold" />
                    {item.label}
                  </span>
                )
              })}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-brand-black shadow-[0_8px_32px_rgba(212,175,55,0.25)] transition hover:bg-brand-gold-light"
              >
                <MessageCircle size={20} />
                WhatsApp Sipariş
              </a>
              <a
                href="#urun"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 bg-brand-gold/5 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold/10"
              >
                <Package size={20} />
                Ürünleri İncele
              </a>
              <a
                href="#bayilik"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 bg-brand-gold/5 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold/10"
              >
                <Truck size={20} />
                Toptan Bayilik
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up animate-delay-1">
            <div className="product-showcase-glow absolute inset-0 rounded-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-navy/40 via-brand-black to-brand-black p-6 shadow-[0_24px_64px_rgba(0,0,0,0.5)] sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  Master Pigeon
                </span>
                <span className="rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-bold text-brand-gold">
                  3 Ürün
                </span>
              </div>
              <img
                src={productImage}
                alt="Master Pigeon — Siyah ve Lacivert Güvercin Yemi 20 KG"
                className="w-full rounded-lg object-contain"
                fetchPriority="high"
              />
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-neutral-900 ring-2 ring-neutral-600" />
                  Siyah Yem
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-brand-navy ring-2 ring-brand-navy-light" />
                  Lacivert Yem
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-emerald-400" />
                  Mama
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-16" />

        <section aria-label="Marka istatistikleri" className="mb-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item, index) => {
            const delays = ['', 'animate-delay-1', 'animate-delay-2', 'animate-delay-3']
            return (
              <div
                key={item.label}
                className={`animate-fade-up rounded-xl border border-white/10 bg-white/[0.03] px-5 py-6 text-center ${delays[index] ?? ''}`}
              >
              <p className="text-2xl font-extrabold text-brand-gold sm:text-3xl">{item.value}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                {item.label}
              </p>
              </div>
            )
          })}
        </section>

        <section id="urun" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Ürün Portföyü</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              3 Premium Ürün
            </h2>
            <p className="mt-4 text-gray-300">
              Siyah ve Lacivert güvercin yemi ile güvercin maması — her biri farklı
              beslenme ihtiyacına özel geliştirilmiş Master Pigeon formülleri.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className={`group overflow-hidden rounded-2xl border bg-gradient-to-b transition hover:-translate-y-1 ${product.cardBorder} ${product.cardBg}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-black">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-sm border border-white/20 bg-brand-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                    {product.weight}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className={`h-3 w-3 shrink-0 rounded-full ring-2 ${product.dot}`} />
                    <span className={`rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${product.tagStyle}`}>
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold uppercase tracking-wider text-white">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-500">{product.pack}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-300">{product.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                        <BadgeCheck size={12} className={`shrink-0 ${product.accentText}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href={`#${product.id}`}
                      className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition group-hover:gap-2 ${product.accentText}`}
                    >
                      Detayları İncele
                      <ChevronRight size={14} />
                    </a>
                    <a
                      href={product.whatsapp}
                      className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-gray-200 transition hover:border-brand-gold/30 hover:text-brand-gold"
                    >
                      <MessageCircle size={14} />
                      Sipariş Ver
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Formül Detayı</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              Ürün İçerikleri
            </h2>
            <p className="mt-4 text-gray-300">
              Her ürün, güvercin beslenmesine özel hazırlanmış premium formül sunar.
            </p>
          </div>

          <div className="sticky top-[68px] z-30 mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-brand-black/80 p-1.5 backdrop-blur">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition sm:text-xs ${
                  activeSection === product.id
                    ? product.id === 'urun-siyah'
                      ? 'bg-neutral-800 text-white ring-1 ring-neutral-600'
                      : product.id === 'urun-lacivert'
                        ? 'bg-brand-navy text-white ring-1 ring-brand-navy-light'
                        : 'bg-emerald-700 text-white ring-1 ring-emerald-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {product.name}
              </a>
            ))}
          </div>

          <div className="mt-12 space-y-10">
            {mixVariants.map((mix) => (
              <article
                key={mix.id}
                id={mix.id}
                className={`scroll-mt-28 overflow-hidden rounded-2xl border border-brand-gold/15 bg-gradient-to-br ${mix.panelGradient}`}
              >
                <div className="grid items-stretch lg:grid-cols-2">
                  <div
                    className={`relative border-t border-brand-gold/10 p-6 sm:p-10 lg:border-t-0 ${
                      mix.imageFirst ? 'order-2 lg:order-1 lg:border-r' : 'order-2 lg:order-2 lg:border-l'
                    }`}
                  >
                    <div className={`${mix.glowClass} absolute inset-0`} />
                    <div className="relative">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className={`inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-200 ${mix.badgeBorder}`}>
                          <span className={`h-2.5 w-2.5 rounded-full ring-2 ${mix.badgeDot}`} />
                          {mix.badge}
                        </span>
                        <span className="rounded-sm border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
                          İçerik Karışımı
                        </span>
                      </div>
                      <img
                        src={mix.image}
                        alt={mix.imageAlt}
                        loading="lazy"
                        className="w-full rounded-xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                      />
                      <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                        {mix.caption}
                      </p>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center p-8 sm:p-12 ${mix.imageFirst ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                    <h3 className="text-2xl font-extrabold uppercase tracking-wider text-white sm:text-3xl">
                      {mix.title}
                    </h3>
                    <p className="mt-5 leading-relaxed text-gray-300">{mix.description}</p>
                    {mix.callout && (
                      <div className="mt-5 flex items-start gap-3 rounded-lg border border-brand-gold/20 bg-brand-gold/5 p-4">
                        <Bird size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                        <p className="text-sm leading-relaxed text-brand-gold/90">{mix.callout}</p>
                      </div>
                    )}
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {mix.ingredientsNote}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {mix.ingredients.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-start gap-4 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition hover:border-brand-gold/20"
                        >
                          <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ring-2 ring-white/20 ${item.color}`} />
                          <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-white">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-400">{item.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {mix.stats.map((stat) => (
                        <div key={stat.label} className="rounded-lg border border-brand-gold/15 bg-brand-gold/5 px-4 py-3 text-center">
                          <p className="text-xl font-extrabold text-brand-gold">{stat.value}</p>
                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="urun-mama" className="scroll-mt-24 border-t border-emerald-500/20 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Güvercin Maması</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              %100 Doğal · 1 KG
            </h2>
            <p className="mt-4 text-gray-300">
              Sağlıklı yavrular, güçlü yarınlar. Yavru gelişimi ve doğal beslenme
              desteği için vitamin-mineral takviyeli toz form mama.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {['%100 Doğal', 'Yerli Üretim', 'HACCP', 'ISO 9001'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/50 via-brand-black to-brand-black">
            <div className="mash-showcase-glow absolute inset-0" />
            <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <span className="inline-block rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  1.000 gr Ambalaj
                </span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-wider text-white sm:text-3xl">
                  Doğadan Gelen Sağlık ve Güç
                </h3>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Master Pigeon Güvercin Maması; mercimek, darı, bezelye, mısır ve
                  seçilmiş tahıl karışımından oluşan, yavru gelişimini destekleyen
                  premium toz mama formülüdür.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  {[
                    'Yavru gelişimini destekler',
                    'Tüy yapısını güçlendirir',
                    'Enerji ve dayanıklılık sağlar',
                    'Bağışıklık sistemine destek',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <BadgeCheck size={16} className="shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={mashWhatsApp}
                  className="mt-8 inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition hover:bg-emerald-500"
                >
                  <MessageCircle size={18} />
                  Mama Siparişi
                </a>
              </div>
              <div className="relative">
                <img
                  src={mashProductImage}
                  alt="Güvercin Maması — %100 Doğal 1 KG ambalaj"
                  loading="lazy"
                  className="w-full rounded-xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mashBenefits.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-emerald-500/15 bg-emerald-950/20 p-6 transition hover:border-emerald-500/30"
                >
                  <div className="mb-4 inline-flex rounded-sm bg-emerald-500/10 p-3 text-emerald-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.description}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-emerald-950/30 to-brand-black">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-extrabold uppercase tracking-wider text-white">
                Yavru Beslenme Desteği
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Sağlıklı kuşlar için doğal destek — yavru gelişiminde güvenilir beslenme
              </p>
            </div>
            <img
              src={mashDetailImage}
              alt="Güvercin maması ile yavru beslenme görseli"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/15 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-white">
                İçindekiler
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Seçilmiş tahıl, baklagil ve tohum karışımı; mineral ve vitamin takviyeli.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {mashIngredients.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/15 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-white">
                Kullanım Talimatı
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-300">
                <p>
                  Günde <strong className="text-white">3 kez</strong> verilecek miktarı,
                  mevsime göre <strong className="text-white">2:1 oranında su</strong> ile
                  karıştırarak hazırlayın.
                </p>
                <p>
                  Beslemeden <strong className="text-white">10 dakika sonra</strong> ek su
                  takviyesi önerilir.
                </p>
                <p className="rounded-sm border border-emerald-500/20 bg-emerald-500/5 p-4 text-emerald-200">
                  Mama formülü; yavru dönemi, büyüme desteği ve ek beslenme ihtiyaçları
                  için idealdir. Yetişkin güvercinlerin ana yemi için Siyah veya Lacivert
                  Güvercin Yemi ürünlerini tercih edin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Ürün Avantajları</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              Ambalajdan Gelen Güvence
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-brand-gold/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 inline-flex rounded-sm bg-brand-gold/10 p-3 text-brand-gold transition group-hover:bg-brand-gold/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="kalite" className="scroll-mt-24 py-16 sm:py-20">
          <div className="overflow-hidden rounded-2xl border border-brand-gold/15 bg-gradient-to-br from-brand-navy/50 via-brand-black to-brand-black">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <SectionLabel>Kurumsal Kalite</SectionLabel>
                <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
                  Profesyonel Üretim Standardı
                </h2>
                <p className="mt-5 leading-relaxed text-gray-300">
                  Master Pigeon, güvenilir ve sürdürülebilir kalite anlayışıyla
                  üretim yapar. Kontrollü hammadde seçimi ve sertifikalı süreçlerle
                  her partide aynı premium standardı hedefler.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Seçilmiş tahıl ve tohum karışımı',
                    'Vitamin ve mineral destekli formül',
                    'Kolay sindirilebilir içerik profili',
                    'Profesyonel yetiştiriciler için 20 KG ambalaj',
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3 text-gray-200">
                      <BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative border-t border-brand-gold/10 bg-brand-black/40 p-8 sm:p-12 lg:border-t-0 lg:border-l">
                <div className="product-showcase-glow absolute inset-0" />
                <img
                  src={productImage}
                  alt="Master Pigeon Premium Pigeon Mix ürün görseli"
                  loading="lazy"
                  className="relative w-full rounded-lg object-contain"
                />
                <p className="relative mt-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  www.masterpigeon.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="bayilik" className="scroll-mt-24 py-16 sm:py-20">
          <div className="overflow-hidden rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-brand-navy/60 via-brand-black to-brand-black">
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <div>
                <SectionLabel>Toptan Satış</SectionLabel>
                <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
                  Bayilik &amp; Toptan Sipariş
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-gray-300">
                  Petshop, yetiştirici ve bayi ağımız için özel fiyatlandırma,
                  düzenli tedarik ve profesyonel destek sunuyoruz. Toptan bayilik
                  talepleriniz için doğrudan satış hattımızdan ulaşabilirsiniz.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-brand-gold" />
                    Bölgesel bayilik fırsatları
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-brand-gold" />
                    Toptan sipariş ve düzenli sevkiyat
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-brand-gold" />
                    Ürün tanıtım ve satış desteği
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-brand-gold/20 bg-brand-black/50 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  Bayilik İletişim Hattı
                </p>
                <a
                  href={dealershipTel}
                  className="mt-4 block text-2xl font-extrabold tracking-wide text-white transition hover:text-brand-gold sm:text-3xl"
                >
                  {dealershipDisplay}
                </a>
                <p className="mt-2 text-sm text-gray-400">Hafta içi 09:00 – 18:00</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={dealershipTel}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light"
                  >
                    <Phone size={18} />
                    Hemen Ara
                  </a>
                  <a
                    href={dealershipWhatsApp}
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold/10"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Bayilik
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Sipariş Süreci</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              Nasıl Sipariş Verilir?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {orderSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <span className="text-3xl font-extrabold text-brand-gold/40">{item.step}</span>
                <h3 className="mt-3 text-lg font-extrabold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sss" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Sık Sorulan Sorular</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              Merak Edilenler
            </h2>
            <p className="mt-4 text-gray-300">
              Ürün seçiminden bayiliğe, beslenmeden teslimata — en çok sorulan
              konulara net yanıtlar.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-gray-500">
            Aradığınız yanıt burada yoksa{' '}
            <a href={whatsappLink} className="text-brand-gold underline-offset-2 hover:underline">
              WhatsApp
            </a>{' '}
            veya{' '}
            <a href={dealershipTel} className="text-brand-gold underline-offset-2 hover:underline">
              bayilik hattından
            </a>{' '}
            bize ulaşın.
          </p>
        </section>

        <section id="iletisim" className="scroll-mt-24 py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <SectionLabel>Perakende Sipariş</SectionLabel>
              <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-wider text-white">
                WhatsApp Sipariş Hattı
              </h2>
              <p className="mt-4 text-gray-300">
                Premium Pigeon Mix 20 KG perakende siparişi için WhatsApp
                hattımızdan hızlıca ulaşabilirsiniz.
              </p>
              <a
                href={whatsappLink}
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light"
              >
                <MessageCircle size={18} />
                {whatsappDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-8 sm:p-10">
              <SectionLabel>Toptan &amp; Bayilik</SectionLabel>
              <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-wider text-white">
                Bayilik İletişim
              </h2>
              <p className="mt-4 text-gray-300">
                Toptan satış ve bayilik başvuruları için doğrudan arayın veya
                WhatsApp üzerinden yazın.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={dealershipTel}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light"
                >
                  <Phone size={18} />
                  {dealershipDisplay}
                </a>
                <a
                  href={dealershipWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold/10"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            Bu sayfadaki ürün bilgileri tanıtım amaçlıdır. Sipariş, iade ve teslimat
            koşulları satın alma adımında paylaşılır.
          </p>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-brand-black/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <img src={logoImage} alt="Master Pigeon" className="h-12 w-auto" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
                Premium güvercin beslenme çözümleri. Siyah ve Lacivert Güvercin Yemi
                ile Güvercin Maması — üç ürünlük kapsamlı portföy.
              </p>
            </div>
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-white">{group.title}</p>
                <nav className="mt-4 flex flex-col gap-2" aria-label={`${group.title} menüsü`}>
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-brand-gold"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">İletişim</p>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <a href={dealershipTel} className="block transition hover:text-brand-gold">
                  Bayilik: {dealershipDisplay}
                </a>
                <a href={whatsappLink} className="block transition hover:text-brand-gold">
                  Sipariş: {whatsappDisplay}
                </a>
                <a
                  href="https://www.masterpigeon.com"
                  className="block text-brand-gold/80 transition hover:text-brand-gold"
                >
                  www.masterpigeon.com
                </a>
              </div>
            </div>
          </div>
          <div className="section-divider mt-10 mb-6" />
          <p className="text-center text-xs uppercase tracking-wider text-gray-500">
            © {new Date().getFullYear()} Master Pigeon — Premium Güvercin Beslenme. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={dealershipTel}
          aria-label="Bayilik hattını ara"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-black/90 text-brand-gold shadow-lg backdrop-blur transition hover:scale-105 hover:bg-brand-gold hover:text-brand-black"
        >
          <Phone size={22} />
        </a>
        <a
          href={whatsappLink}
          aria-label="WhatsApp ile iletişime geç"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-black shadow-[0_8px_24px_rgba(212,175,55,0.35)] transition hover:scale-105 hover:bg-brand-gold-light"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  )
}

export default App
