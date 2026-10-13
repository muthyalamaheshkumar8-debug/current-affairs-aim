import type {Metadata} from 'next';
export const metadata:Metadata={title:'Website tour | Current Affairs Aim',description:'See actual public website views and a short screenshot walkthrough of Current Affairs Aim.'};
export default function Showcase(){return <main className="policy-page">
 <a href="/">← Current Affairs Aim</a><h1>Take a look around</h1>
 <p>A short introduction to the website, from the public homepage to creating your account.</p>
 <video controls preload="metadata" playsInline poster="/showcase/home.jpg" aria-label="Current Affairs Aim public website screenshot walkthrough" style={{width:'100%',borderRadius:12}}><source src="/showcase/current-affairs-aim-walkthrough.mp4" type="video/mp4"/>Your browser does not support video. <a href="/showcase/current-affairs-aim-walkthrough.mp4">Download the walkthrough</a>.</video>
 <p className="muted">This silent walkthrough uses actual website screenshots captured on 13 October 2026. It does not show a completed login, quiz attempt or Android-device test.</p>
 {[['home','Public homepage'],['features','Study features and developer credit'],['login','Email and password login'],['signup','Registration without a state selection'],['android','Android testing download information']].map(([name,label])=><figure key={name} style={{margin:'28px 0'}}><a href={'/showcase/'+name+'.jpg'}><img src={'/showcase/'+name+'.jpg'} alt={label+' — Current Affairs Aim website'} width={1348} height={926} loading="lazy" style={{width:'100%',height:'auto',borderRadius:12,border:'1px solid var(--line)'}}/></a><figcaption style={{marginTop:8,color:'var(--muted)'}}>{label}</figcaption></figure>)}
 <p><a className="button primary" href="/signup">Create your account</a> <a className="button light" href="/login">Log in</a></p>
 </main>}
