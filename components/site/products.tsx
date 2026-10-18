import {
  ArrowDown,
  ArrowUpRight,
  Check,
  GraduationCap,
  LayoutGrid,
  Package,
  Receipt,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react"
import type { ReactNode } from "react"

import { ConversionLink } from "@/components/site/conversion-link"
import { site } from "@/lib/site"

function ArtFrame({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[152px] w-[251px]">
      {children}
    </div>
  )
}

function SeraArt() {
  const rows = [
    { y: 82, width: 96, tag: true },
    { y: 106, width: 82, tag: false },
    { y: 130, width: 68, tag: false },
  ]

  return (
    <ArtFrame>
      <div className="absolute top-[-40px] left-6 size-[230px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#A78BFA3D_0%,#A78BFA00_100%)]" />
      <div className="absolute top-[76px] left-0 h-px w-[251px] bg-[#1B1C1F]" />

      <div className="absolute top-[18px] left-5 flex size-11 items-center justify-center rounded-xl border border-[#A78BFA38] bg-[#A78BFA1F]">
        <GraduationCap className="size-5 text-iris" />
      </div>

      {rows.map((row) => (
        <div key={row.y}>
          <span
            style={{ top: row.y, left: 22 }}
            className={`absolute size-2.5 rounded-full ${
              row.tag ? "bg-[#A78BFA66]" : "bg-[#2E3036]"
            }`}
          />
          <span
            style={{ top: row.y + 3, left: 40, width: row.width }}
            className="absolute h-[5px] rounded-[3px] bg-[#2E3036]"
          />
          <span
            style={{ top: row.y + 3, left: 146 }}
            className={`absolute h-[5px] w-[26px] rounded-[3px] ${
              row.tag ? "bg-[#A78BFA55]" : "bg-[#23252A]"
            }`}
          />
        </div>
      ))}

      <span className="absolute top-4 left-[150px] text-[17px] font-medium text-iris">
        98%
      </span>
      <span className="absolute top-9 left-[151px] font-mono text-[6px] tracking-[0.8px] text-[#6E747C]">
        PRESENT
      </span>
    </ArtFrame>
  )
}

function HrisArt() {
  const nodes = [
    { x: 14, active: false },
    { x: 98, active: true },
    { x: 182, active: false },
  ]

  return (
    <ArtFrame>
      <div className="absolute top-[-40px] left-6 size-[230px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#8FB4E03D_0%,#8FB4E000_100%)]" />
      <div className="absolute top-[76px] left-0 h-px w-[251px] bg-[#1B1C1F]" />

      <div className="absolute top-4 left-[92px] flex h-6 w-[62px] items-center justify-center gap-1 rounded-md border border-[#8FB4E044] bg-[#8FB4E024]">
        <span className="size-1.5 rounded-full bg-azure" />
        <span className="h-1 w-[22px] rounded-[2px] bg-[#8FB4E088]" />
      </div>

      <span className="absolute top-10 left-[122px] h-4 w-px bg-[#333840]" />
      <span className="absolute top-14 left-10 h-px w-[167px] bg-[#333840]" />
      <span className="absolute top-14 left-10 h-3 w-px bg-[#333840]" />
      <span className="absolute top-14 left-[124px] h-3 w-px bg-[#333840]" />
      <span className="absolute top-14 left-[208px] h-3 w-px bg-[#333840]" />

      {nodes.map((node) => (
        <div
          key={node.x}
          style={{ left: node.x }}
          className="absolute top-[68px] flex h-6 w-[52px] items-center justify-center gap-1 rounded-md border border-[#292D33] bg-[#16181C]"
        >
          <span
            className={`size-[5px] rounded-full ${
              node.active ? "bg-azure" : "bg-[#4A505A]"
            }`}
          />
          <span className="h-[3px] w-[18px] rounded-[2px] bg-[#3A3F47]" />
        </div>
      ))}

      <span className="absolute top-[112px] left-[14px] font-mono text-[6px] tracking-[0.8px] text-[#6E747C]">
        24 ACTIVE · 3 ON LEAVE
      </span>
    </ArtFrame>
  )
}

const receiptLines = [
  { y: 26, width: 44 },
  { y: 37, width: 38 },
  { y: 48, width: 32 },
]

const barcode = [
  { left: 12, width: 2.5 },
  { left: 20, width: 1 },
  { left: 28, width: 2.5 },
  { left: 36, width: 1 },
  { left: 44, width: 2.5 },
  { left: 52, width: 1 },
  { left: 60, width: 2.5 },
]

function PosArt() {
  return (
    <ArtFrame>
      <div className="absolute top-[-40px] left-6 size-[230px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#FF6A0D3D_0%,#FF6A0D00_100%)]" />
      <div className="absolute top-[76px] left-0 h-px w-[251px] bg-[#1B1C1F]" />

      <div className="absolute top-2.5 left-[92px] h-[124px] w-20 rounded-md bg-[#F7F4EE]">
        <span className="absolute top-3 left-2.5 h-1 w-[34px] rounded-[2px] bg-[#B9B2A4]" />

        {receiptLines.map((line) => (
          <div key={line.y}>
            <span
              style={{ top: line.y, width: line.width }}
              className="absolute left-2.5 h-[3px] rounded-[1.5px] bg-[#C9C2B4]"
            />
            <span
              style={{ top: line.y }}
              className="absolute left-[58px] h-[3px] w-3 rounded-[1.5px] bg-[#A9A294]"
            />
          </div>
        ))}

        <span className="absolute top-[70px] left-2.5 h-px w-[60px] bg-[#D8D1C4]" />
        <span className="absolute top-[78px] left-2.5 h-1 w-6 rounded-[2px] bg-[#6E675C]" />
        <span className="absolute top-[78px] left-[44px] h-1 w-[26px] rounded-[2px] bg-[#3E3930]" />

        {barcode.map((bar) => (
          <span
            key={bar.left}
            style={{ left: bar.left, width: bar.width }}
            className="absolute top-24 h-4 bg-[#4A443A]"
          />
        ))}
      </div>

      <div className="absolute top-[100px] left-[158px] flex items-center gap-1 rounded-full border border-[#24402F] bg-[#10201A] px-2 py-[5px]">
        <Check className="size-[9px] text-live" />
        <span className="font-mono text-[7px] tracking-[0.8px] text-live">
          PAID
        </span>
      </div>
    </ArtFrame>
  )
}

const erpModules = [
  { Icon: Package, x: 22, y: 24 },
  { Icon: Wallet, x: 94, y: 24 },
  { Icon: Users, x: 166, y: 24 },
  { Icon: LayoutGrid, x: 22, y: 78 },
  { Icon: Receipt, x: 94, y: 78 },
  { Icon: ShieldCheck, x: 166, y: 78 },
]

function ErpArt() {
  return (
    <ArtFrame>
      <div className="absolute top-[-40px] left-6 size-[230px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#4FD18B3D_0%,#4FD18B00_100%)]" />
      <div className="absolute top-[76px] left-0 h-px w-[251px] bg-[#1B1C1F]" />

      {erpModules.map(({ Icon, x, y }) => (
        <div
          key={`${x}-${y}`}
          style={{ left: x, top: y }}
          className="absolute flex h-11 w-[62px] items-center justify-center rounded-lg border border-[#22302A] bg-[#121A16]"
        >
          <Icon
            className={`size-3.5 ${
              Icon === Receipt ? "text-live" : "text-[#6F8A7C]"
            }`}
          />
        </div>
      ))}

      <span className="absolute top-[132px] left-[22px] font-mono text-[6px] tracking-[0.9px] text-[#6E747C]">
        6 MODULES · 1 LEDGER
      </span>
    </ArtFrame>
  )
}

function PaymentArt() {
  return (
    <ArtFrame>
      <div className="absolute top-[-40px] left-6 size-[230px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#C99B3F3D_0%,#C99B3F00_100%)]" />
      <div className="absolute top-[76px] left-0 h-px w-[251px] bg-[#1B1C1F]" />

      <div className="absolute top-6 left-[52px] h-[78px] w-[124px] rounded-[10px] bg-[linear-gradient(131.935deg,#F4D08A_16.888%,#C99B3F_83.112%)]">
        <span className="absolute top-[26px] left-3.5 h-[11px] w-4 rounded-[3px] bg-[#8A6420]" />
        <span className="absolute top-[50px] left-3.5 font-mono text-[9px] tracking-[1px] text-[#4A3510]">
          •••• 4242
        </span>
        <span className="absolute top-3 left-24 size-3.5 rounded-full bg-[#4A3510] opacity-30" />
      </div>

      <div className="absolute top-20 left-[156px] flex size-7 items-center justify-center rounded-full bg-live">
        <Check className="size-3.5 text-ink" />
      </div>

      <span className="absolute top-[116px] left-[52px] font-mono text-[6px] tracking-[0.9px] text-[#6E747C]">
        MIDTRANS + XENDIT
      </span>
    </ArtFrame>
  )
}

const products = [
  {
    index: "01",
    name: "Sera School",
    description: "Admissions, classes, invoices and parent portal.",
    url: "sera.santosatechid.cloud",
    accent: "text-iris",
    visual: SeraArt,
  },
  {
    index: "02",
    name: "HRIS System",
    description:
      "Records, attendance, leave and payroll — one profile per person.",
    url: "hr.santosatechid.cloud",
    accent: "text-azure",
    visual: HrisArt,
  },
  {
    index: "03",
    name: "POS System",
    description:
      "Checkout, stock and daily receipts for every counter in the store.",
    url: "pos.santosatechid.cloud",
    accent: "text-brand",
    visual: PosArt,
  },
  {
    index: "04",
    name: "ERP System",
    description:
      "Purchasing, inventory and finance, reconciled across branches.",
    url: "erp.santosatechid.cloud",
    accent: "text-live",
    visual: ErpArt,
  },
  {
    index: "05",
    name: "Payment Gateway",
    description: "One checkout across Midtrans and Xendit.",
    url: "pg.santosatechid.cloud",
    accent: "text-gold",
    visual: PaymentArt,
  },
]

export function Products() {
  return (
    <section
      id="products"
      aria-labelledby="suite-heading"
      className="relative w-full overflow-hidden px-6 pt-12 pb-12 sm:px-10 lg:px-16 lg:pt-14 lg:pb-14"
    >
      <div className="pointer-events-none absolute top-[-260px] left-1/2 h-[520px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#FF6A0D33_0%,#A78BFA14_60%,transparent_100%)]" />

      <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-center gap-[22px]">
        <p
          data-reveal
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          className="flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pr-3 pl-2.5"
        >
          <span className="pulse-dot-brand size-[5px] rounded-full bg-brand" />
          <span className="font-mono text-[9px] tracking-[1.4px] text-body">
            ONE PLATFORM · FIVE PRODUCTS
          </span>
        </p>

        <h2
          id="suite-heading"
          data-reveal
          style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
          className="max-w-[760px] text-center text-[clamp(2.25rem,5.2vw,3.875rem)] leading-[1.03] font-medium tracking-[-0.032em] text-white"
        >
          Run the whole business on one suite.
        </h2>

        <p
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          className="max-w-[600px] text-center text-[16px] leading-[26px] text-body"
        >
          School, people, retail, operations and payments — five products built
          on one stack, shipped on one domain.
        </p>

        <div
          data-reveal
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <ConversionLink
            href={`mailto:${site.email}?subject=Demo%20request`}
            event="generate_lead"
            label="book_demo"
            className="group flex items-center gap-2 rounded-full bg-white px-[22px] py-[13px] text-[13.5px] font-medium text-ink transition-[background-color,scale] duration-200 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.97]"
          >
            Book a demo
            <ArrowUpRight
              aria-hidden="true"
              className="size-[13px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </ConversionLink>

          <ConversionLink
            href="#suite-products"
            event="cta_click"
            label="explore_products"
            className="group flex items-center gap-2 rounded-full border border-line-strong px-[22px] py-[13px] text-[13.5px] font-medium text-white transition-[background-color,border-color,scale] duration-200 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.97]"
          >
            Explore products
            <ArrowDown
              aria-hidden="true"
              className="size-[13px] transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </ConversionLink>
        </div>

        <p
          data-reveal="fade"
          style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          className="text-center font-mono text-[9px] tracking-[1.4px] text-dim"
        >
          LIVE AT SERA.SANTOSATECHID.CLOUD · HR · POS · ERP · PG
        </p>
      </div>

      <ul
        id="suite-products"
        className="relative mx-auto mt-11 grid w-full max-w-[1312px] scroll-mt-24 grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5"
      >
        {products.map((product, index) => {
          const Visual = product.visual

          return (
            <li
              key={product.url}
              data-reveal="scale"
              style={
                { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
              }
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-surface transition-[translate,border-color] duration-500 hover:-translate-y-1 hover:border-line-strong">
                <div className="relative h-[152px] w-full shrink-0 overflow-hidden bg-[#101011]">
                  <div className="transition-transform duration-700 group-hover:scale-[1.04]">
                    <Visual />
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-[16px_18px_18px_18px]">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-[8px] tracking-[1px] text-dim">
                      {product.index}
                    </span>
                    <span className="flex items-center gap-[5px]">
                      <span className="pulse-dot size-1 rounded-full bg-live" />
                      <span className="font-mono text-[7px] tracking-[0.8px] text-live">
                        LIVE
                      </span>
                    </span>
                  </div>

                  <h3 className="text-[17px] font-medium tracking-[-0.3px] text-white">
                    {product.name}
                  </h3>
                  <p className="text-[11.5px] leading-[18px] text-dim">
                    {product.description}
                  </p>

                  <a
                    href={`https://${product.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore ${product.name}`}
                    className="mt-1 flex w-fit items-center gap-1.5 rounded-full border border-line-strong px-2.5 py-[7px] text-[10.5px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Explore
                    <ArrowUpRight
                      aria-hidden="true"
                      className={`size-2.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${product.accent}`}
                    />
                  </a>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
