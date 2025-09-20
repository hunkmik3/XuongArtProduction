import './globals.css';
import MotionProvider from './components/MotionProvider';

export const metadata = {
  title: 'XƯỞNG ART PRODUCTION',
  description: 'Portfolio studio sản xuất video: TVC, Music Video, Documentary',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="font-body bg-white text-black">
        <MotionProvider>
          {children}
        </MotionProvider>
        <div id="cursor-ring" className="cursor-ring" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            const ring = document.getElementById('cursor-ring');
            if(!ring) return;
            let raf;
            let x=0,y=0,tx=0,ty=0;
            const lerp=(a,b,t)=>a+(b-a)*t;
            window.addEventListener('mousemove', (e)=>{ x=e.clientX; y=e.clientY; });
            const loop=()=>{ tx=lerp(tx,x,0.2); ty=lerp(ty,y,0.2); ring.style.transform='translate(' + tx + 'px, ' + ty + 'px)'; raf=requestAnimationFrame(loop); };
            loop();
            const accentEnter=(e)=>{ ring.classList.add('is-accent'); };
            const accentLeave=(e)=>{ ring.classList.remove('is-accent'); };
            document.addEventListener('mouseover', (e)=>{ const t=e.target; if(t.closest('button, a, [data-video], [data-cta]')) accentEnter(); });
            document.addEventListener('mouseout', (e)=>{ const t=e.target; if(t.closest('button, a, [data-video], [data-cta]')) accentLeave(); });
          })();
        ` }} />
      </body>
    </html>
  );
}


