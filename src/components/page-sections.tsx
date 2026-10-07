import { useEffect,useState,type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight,ArrowUpRight,CheckCircle2,ChevronRight,Download,Factory,Home,MessageSquareText,Pause,Play,Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL,EnquiryForm } from "@/components/enquiry";
import { describeType,pillarList,type Pillar,type SubCategory } from "@/lib/site-data";
import powerImg from "@/assets/power-transmission.jpg";import automationImg from "@/assets/automation.jpg";import adhesivesImg from "@/assets/adhesives.jpg";
import classicalImg from "@/assets/v-belts/classical.jpg";import coggedImg from "@/assets/v-belts/cogged.jpg";import bandedImg from "@/assets/v-belts/banded.jpg";import narrowImg from "@/assets/v-belts/narrow.jpg";
const images={power:powerImg,automation:automationImg,adhesives:adhesivesImg};
const vBeltPhotos=[{image:classicalImg,title:"Classical wrapped belts",note:"General-purpose wrapped profiles for dependable plant maintenance."},{image:coggedImg,title:"Raw-edge cogged belts",note:"Flexible profiles for compact drives and improved heat dissipation."},{image:bandedImg,title:"Banded drive systems",note:"Joined belts for vibration control and shock-loaded applications."},{image:narrowImg,title:"Narrow and variable-speed profiles",note:"Compact section options for high-power and adjustable-speed drives."}];
const formCategory=(key:string)=>key==="power-transmission"?"Power Transmission":key==="automation"?"Automation":"Adhesives";
const rangePhotos=(pillar:Pillar,sub:SubCategory)=>sub.slug==="v-belts"?vBeltPhotos:[{image:images[pillar.image],title:sub.name,note:sub.short}];
export function Breadcrumbs({items}:{items:{label:string;to:string}[]}){return <section className="border-b border-border bg-background"><div className="site-container py-5"><nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 text-sm font-semibold"><li><Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"><Home className="size-4"/>Home</Link></li>{items.map((item,index)=>{const current=index===items.length-1;return <li key={item.to} className="flex items-center gap-2"><ChevronRight className="size-4 text-muted-foreground/60"/>{current?<span aria-current="page" className="text-primary">{item.label}</span>:<a href={item.to} className="text-muted-foreground hover:text-primary">{item.label}</a>}</li>})}</ol></nav></div></section>}
export function PageHero({kicker,title,description,image,accent="brand",compact=false}:{kicker:string;title:string;description:string;image?:string;accent?:string;compact?:boolean}){return <section className={`page-hero pattern-${accent} ${compact?"page-hero-compact h-[260px] md:h-[300px]":"page-hero-full"}`}><div className="absolute inset-0 bg-foreground/75"/>{image&&<img src={image} alt="Industrial machinery and components" width={1408} height={912} className="absolute inset-0 -z-10 size-full object-cover"/>}<div className={`site-container relative flex h-full flex-col justify-center text-background ${compact?"py-6":"py-20 md:py-28"}`}><p className="eyebrow text-primary-soft">{kicker}</p><h1 className={`mt-3 max-w-4xl font-black leading-tight ${compact?"text-2xl sm:text-3xl md:text-4xl":"text-4xl md:text-6xl"}`}>{title}</h1><p className={`max-w-2xl text-background/80 ${compact?"mt-3 text-sm leading-6 md:text-base md:leading-7":"mt-6 text-lg leading-8"}`}>{description}</p></div></section>}
export function SectionHeading({eyebrow,title,text}:{eyebrow?:string;title:React.ReactNode;text?:string}){return <div className="mb-10 max-w-3xl">{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h2 className="section-title mt-3">{title}</h2>{text&&<p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p>}</div>}
export function PillarCards(){return <div className="grid gap-5 lg:grid-cols-3">{pillarList.map(p=><article key={p.key} className={`pillar-card pillar-${p.key}`}><img src={images[p.image]} alt={`${p.name} industrial equipment`} width={1408} height={912} loading="lazy"/><div className="p-6"><span className="eyebrow">Division 0{pillarList.indexOf(p)+1}</span><h3 className="mt-2 text-2xl font-black">{p.name}</h3><p className="mt-3 leading-7 text-muted-foreground">{p.description}</p><Button asChild variant="link" className="mt-3 px-0"><Link to={`/${p.key}` as "/power-transmission"|"/automation"|"/adhesives"}>Explore range <ArrowRight/></Link></Button></div></article>)}</div>}
export function BrandStrip({ brands }: { brands: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlaying(!motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api || !playing || hovered || focused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) api.scrollNext();
    }, 3000);
    return () => window.clearInterval(timer);
  }, [api, playing, hovered, focused]);

  if (!brands.length) return null;
  // Extra slides keep short brand lists looping even with four tiles visible.
  const slides = brands.length > 4 ? brands : [...brands, ...brands, ...brands];
  const controlClass = "static size-9 translate-y-0 rounded-none border-background/25 bg-transparent text-background hover:bg-background hover:text-foreground";

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      setApi={setApi}
      className="brand-strip min-w-0"
      aria-label="Available brands"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <CarouselContent className="ml-0 touch-pan-y" aria-live="off">
        {slides.map((brand, index) => (
          <CarouselItem key={`${brand}-${index}`} className="basis-1/2 pl-0 sm:basis-1/3 lg:basis-1/4" aria-label={brand}>
            <div className="brand-tile">{brand}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-3 flex justify-end gap-2">
        <CarouselPrevious className={controlClass} title="Previous brands" />
        <Button
          type="button"
          variant="outline"
          size="icon"
          className={controlClass}
          aria-label={playing ? "Pause automatic sliding" : "Start automatic sliding"}
          title={playing ? "Pause automatic sliding" : "Start automatic sliding"}
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </Button>
        <CarouselNext className={controlClass} title="Next brands" />
      </div>
    </Carousel>
  );
}
export function CategoryGrid({pillar}:{pillar:Pillar}){const [selected,setSelected]=useState<SubCategory|null>(null);return <><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{pillar.subcategories.map((s,i)=><article className="category-card" key={s.slug}><span className="text-xs font-black text-category">0{i+1}</span><h3 className="mt-5 text-xl font-black">{s.name}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{s.short}</p><div className="mt-6 flex flex-wrap gap-2"><Button type="button" size="sm" onClick={()=>setSelected(s)}>View range <ArrowRight/></Button><Button asChild variant="outline" size="sm"><a href={`/${pillar.key}/${s.slug}#enquire`}>Quick enquiry</a></Button></div></article>)}</div><ProductRangeDialog pillar={pillar} sub={selected} open={!!selected} onOpenChange={open=>!open&&setSelected(null)}/></>}
function ProductRangeDialog({pillar,sub,open,onOpenChange}:{pillar:Pillar;sub:SubCategory|null;open:boolean;onOpenChange:(open:boolean)=>void}){
const [photo,setPhoto]=useState(0);
useEffect(()=>{if(open)setPhoto(0)},[open,sub?.slug]);
if(!sub)return null;
const photos=rangePhotos(pillar,sub);
const current=photos[Math.min(photo,photos.length-1)];
const quoteDetails=["Existing size, marking or part number","Preferred brand or equivalent options","Quantity, application and machine type","Delivery location and urgency"];
return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className={`theme-${pillar.key} max-h-[94vh] gap-0 overflow-y-auto p-0 sm:max-w-6xl`}><div className="grid items-start lg:grid-cols-[1fr_.9fr]"><div className="flex flex-col"><div className="bg-foreground text-background"><div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px]"><img src={current.image} alt={current.title} width={900} height={680} className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-5"><p className="eyebrow text-primary-soft">Product photos</p><h3 className="mt-2 text-2xl font-black">{current.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-background/75">{current.note}</p></div></div>{photos.length>1&&<div className="grid grid-cols-4 gap-2 p-2">{photos.map((item,index)=><button key={item.title} type="button" aria-label={`Show ${item.title}`} onClick={()=>setPhoto(index)} className={`h-14 overflow-hidden border ${photo===index?"border-primary":"border-background/20"}`}><img src={item.image} alt="" width={180} height={120} className="size-full object-cover"/></button>)}</div>}<div className="grid gap-3 border-t border-background/15 p-4 sm:grid-cols-2"><InfoTile icon={<Factory/>} label="Applications" text={sub.applications}/><InfoTile icon={<Tags/>} label="Brands" text={sub.brands.join(", ")}/></div></div><div className="border-r border-border bg-background p-4 sm:p-5"><div className="border-l-4 border-category bg-category/10 p-4"><p className="eyebrow">For faster quotation</p><h3 className="mt-2 text-lg font-black text-foreground">Share these details with enquiry</h3><div className="mt-3 grid gap-2">{quoteDetails.map(item=><div key={item} className="flex gap-2 text-xs font-semibold leading-5 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-category"/><span>{item}</span></div>)}</div></div><div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{["Genuine brands","Selection support","PAN India supply"].map(item=><div key={item} className="border border-border bg-muted px-3 py-2 text-xs font-black text-foreground">{item}</div>)}</div></div></div><div className="p-6 pb-4 sm:px-8 sm:pb-4 sm:pt-8"><DialogHeader><p className="eyebrow">{pillar.name}</p><DialogTitle className="mt-2 text-3xl font-black leading-tight text-foreground">{sub.name}</DialogTitle><DialogDescription className="pt-2 text-base leading-7">{sub.short} Share size, brand, quantity or machine details for a quick match.</DialogDescription></DialogHeader><div className="mt-6"><h3 className="text-sm font-black uppercase text-muted-foreground">Available product types</h3><div className="mt-3 flex flex-wrap gap-2">{sub.types.map(type=><span key={type} className="border border-category/30 bg-category/10 px-3 py-2 text-xs font-black text-category">{type}</span>)}</div></div><div className="mt-7 border-t border-border pt-6"><h3 className="mb-4 text-xl font-black">Send enquiry</h3><EnquiryForm seed={{category:formCategory(pillar.key),requirement:`${sub.name} requirement: `}} compact/></div><Button asChild variant="link" className="mt-3 px-0 text-category"><a href={`/${pillar.key}/${sub.slug}`}>Open full product page <ArrowUpRight/></a></Button></div></div></DialogContent></Dialog>}
function InfoTile({icon,label,text}:{icon:ReactNode;label:string;text:string}){return <div className="border border-background/15 bg-background/5 p-4">{icon}<strong className="mt-3 block text-xs uppercase text-primary-soft">{label}</strong><p className="mt-2 text-sm leading-6 text-background/75">{text}</p></div>}
const brochureSafe=(value:string)=>value.replace(/[^\w-]+/g,"-").replace(/^-+|-+$/g,"").toLowerCase();
const pdfText=(value:string)=>value.replace(/[\\()]/g,"\\$&").replace(/[^\x20-\x7e]/g,"");
function downloadBrochurePdf(brand:string){
const lines=[`${brand} Product Brochure`,"RB International Belting & Automation","Power transmission, automation and industrial adhesive supply from Pune.","","This generated brochure placeholder confirms your download request.","The RBI team will share the latest official literature and selection support by email.","","Contact: response@rbibelting.in | +91 87881 95839"];
const streamLines=lines.map((line,index)=>`BT /F1 ${index===0?24:12} Tf 72 ${720-index*34} Td (${pdfText(line)}) Tj ET`).join("\n");
const objects=["<< /Type /Catalog /Pages 2 0 R >>","<< /Type /Pages /Kids [3 0 R] /Count 1 >>","<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>","<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",`<< /Length ${streamLines.length} >>\nstream\n${streamLines}\nendstream`];
let pdf="%PDF-1.4\n";const offsets=[0];objects.forEach((object,index)=>{offsets[index+1]=pdf.length;pdf+=`${index+1} 0 obj\n${object}\nendobj\n`});const xref=pdf.length;pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n${offsets.slice(1).map(offset=>`${String(offset).padStart(10,"0")} 00000 n `).join("\n")}\ntrailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
const url=URL.createObjectURL(new Blob([pdf],{type:"application/pdf"}));const link=document.createElement("a");link.href=url;link.download=`${brochureSafe(brand) || "rbi"}-brochure.pdf`;document.body.appendChild(link);link.click();link.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function BrochureRequestDialog({brand,open,onOpenChange}:{brand:string|null;open:boolean;onOpenChange:(open:boolean)=>void}){const [error,setError]=useState("");if(!brand)return null;const submit=(form:HTMLFormElement)=>{const data=new FormData(form);const name=String(data.get("name")||"").trim();const phone=String(data.get("phone")||"").trim();const email=String(data.get("email")||"").trim();const company=String(data.get("company")||"").trim();const note=String(data.get("note")||"").trim();if(!name||!phone||!email){setError("Please add your name, phone number and email.");return}setError("");const message=`Brochure download request\nBrand: ${brand}\nName: ${name}\nCompany: ${company || "-"}\nPhone: ${phone}\nEmail: ${email}\nRequirement: ${note || "Requested brochure download from website."}`;window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(`Brochure request: ${brand}`)}&body=${encodeURIComponent(message)}`;window.setTimeout(()=>{downloadBrochurePdf(brand);onOpenChange(false)},700)};return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl"><DialogHeader><p className="eyebrow">Brochure access</p><DialogTitle className="text-2xl">Download {brand} brochure</DialogTitle><DialogDescription>Fill in your details first. An email draft will open for RBI, then the brochure PDF will download.</DialogDescription></DialogHeader><form className="space-y-4" onSubmit={(event)=>{event.preventDefault();submit(event.currentTarget)}}><div className="grid gap-4 sm:grid-cols-2"><div><Label htmlFor="br-name">Name *</Label><Input id="br-name" name="name" required maxLength={100} className="mt-1 h-12"/></div><div><Label htmlFor="br-company">Company</Label><Input id="br-company" name="company" maxLength={120} className="mt-1 h-12"/></div><div><Label htmlFor="br-phone">Phone *</Label><Input id="br-phone" name="phone" type="tel" required maxLength={20} className="mt-1 h-12"/></div><div><Label htmlFor="br-email">Email *</Label><Input id="br-email" name="email" type="email" required maxLength={200} className="mt-1 h-12"/></div></div><div><Label htmlFor="br-note">Requirement</Label><Textarea id="br-note" name="note" rows={3} maxLength={600} className="mt-1" defaultValue={`Please share the latest ${brand} brochure and product details.`}/></div>{error&&<p className="text-sm font-medium text-destructive">{error}</p>}<Button type="submit" size="lg" className="h-12 w-full"><Download/>Submit and download brochure</Button></form></DialogContent></Dialog>}
export function BrochureGrid({brands}:{brands:string[]}){const [selected,setSelected]=useState<string|null>(null);return <><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{brands.slice(0,8).map(b=><article key={b} className="border border-border bg-background p-5"><Download className="text-primary"/><h3 className="mt-5 font-black">Brochure: {b}</h3><p className="mt-2 text-xs text-muted-foreground">Fill the quick form to receive follow-up and download the PDF.</p><Button type="button" variant="outline" size="sm" className="mt-5" onClick={()=>setSelected(b)}>Download PDF</Button></article>)}</div><BrochureRequestDialog brand={selected} open={!!selected} onOpenChange={open=>!open&&setSelected(null)}/></>}
export function ProductTypes({pillar,sub,onQuote,onView}:{pillar:Pillar;sub:SubCategory;onQuote?:(name:string)=>void;onView?:(name:string)=>void}){return <div className="grid gap-4 md:grid-cols-2">{sub.types.map((t,i)=><article key={t} className="product-type"><div className="flex items-start justify-between gap-4"><span className="grid size-9 shrink-0 place-items-center bg-category text-sm font-black text-category-foreground">{String(i+1).padStart(2,"0")}</span><CheckCircle2 className="text-category"/></div><h3 className="mt-6 text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-muted-foreground">{describeType(t)}</p>{onView?<Button className="mt-5" onClick={()=>onView(t)}>View range <ArrowRight/></Button>:onQuote&&<Button variant="outline" className="mt-5" onClick={()=>onQuote(t)}><MessageSquareText/>Request quote</Button>}</article>)}</div>}
export function EnquiryBand({title,category,requirement}:{title:string;category:string;requirement?:string}){return <section id="enquire" className="pattern-shared bg-muted py-16"><div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Technical enquiry</p><h2 className="section-title mt-3">{title}</h2><p className="mt-5 leading-7 text-muted-foreground">Share a part number, size, brand, drawing or application. Our team will help identify the right option.</p></div><div className="border border-border bg-background p-5 shadow-sm md:p-8"><EnquiryForm seed={requirement?{category,requirement}:{category}} compact/></div></div></section>}
export {images};
