# 🚀 Astro SupaBase Authentication Example

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/hamer1818/AstroLoginRegister)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/hamer1818/AstroLoginRegister/master?import=true)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/hamer1818/AstroLoginRegister)

#  | 🌟 Overview |🌟 Genel Bakış
--- | --- | ---
0 | A modern authentication system built with Astro and Supabase, featuring: | Astro ve Supabase ile geliştirilmiş modern bir kimlik doğrulama sistemi, içerikler:
1 | Dual language support (English/Turkish) | Çift dil desteği (İngilizce/Türkçe)
2 | Secure authentication flow | Güvenli kimlik doğrulama akışı
3 | Clean and responsive UI | Temiz ve duyarlı kullanıcı arayüzü
4 | TypeScript integration | TypeScript entegrasyonu
5 | Tailwind CSS styling | Tailwind CSS stili

📖 Description | Açıklama
--- | ---
A simple yet powerful authentication implementation using Astro and Supabase, featuring both English and Turkish language support.  |  Astro ve Supabase kullanarak geliştirilmiş, Türkçe ve İngilizce dil desteği sunan basit ve güçlü bir kimlik doğrulama uygulaması.

## 🛠️ Installation | Kurulum

> Note: This application was created and tested using the [pnpm](https://pnpm.io/) package manager.

> Not: Bu uygulama [pnpm](https://pnpm.io/) paket yöneticisi ile oluşturulup test edilmiştir.

1. **Clone the repository | Depoyu klonlayın:**
```bash
git clone https://github.com/hamer1818/AstroLoginRegister.git
# or | veya
pnpm create astro@latest --template hamer1818/AstroLoginRegister#master
```
2. Install the dependencies | Bağımlılıkları yükleyin:
```bash
pnpm install  # Recommended | Önerilen
# or | veya
npm install
yarn install
```
3. Configure environment variables | Ortam değişkenlerini yapılandırın:
```bash
# Create .env file | .env dosyası oluşturun
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```
## 🎮 Available Commands | Kullanılabilir Komutlar
Command | Description (EN) | Açıklama (TR)
--- | --- | ---
`pnpm install` | Install dependencies | Bağımlılıkları yükle
`pnpm run dev` | Start development server | Geliştirme sunucusunu başlat
`pnpm run build` | Build the project | Projeyi derle
`pnpm run preview` | Preview the project | Projeyi önizle

## 📁 Project Structure | Proje Yapısı
```bash
AstroLoginRegister/
├─ .gitignore
├─ .vscode/
│  ├─ extensions.json
│  └─ launch.json
├─ astro.config.mjs
├─ LICENSE
├─ package.json
├─ pnpm-lock.yaml
├─ public/
│  └─ favicon.svg
├─ README.md
├─ src/
│  ├─ env.d.ts
│  ├─ layouts/
│  │  └─ Layout.astro
│  ├─ lib/
│  │  └─ supabase.ts
│  ├─ middleware.ts
│  └─ pages/
│     ├─ dashboard.astro
│     ├─ en/
│     │  ├─ dashboard.astro
│     │  ├─ index.astro
│     │  ├─ register.astro
│     │  └─ signin.astro
│     ├─ index.astro
│     ├─ register.astro
│     └─ signin.astro
├─ tailwind.config.mjs
└─ tsconfig.json
```

## 📝 License | Lisans
--- | ---
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. | Bu proje MIT Lisansı ile lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Contributing | Katkıda Bulunma
--- | ---
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. | Katkılar, açık kaynak topluluğunu öğrenmek, ilham almak ve oluşturmak için harika bir yer haline getiren şeylerdir. Yaptığınız her katkı **büyük bir takdirle karşılanır**.

