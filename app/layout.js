import './globals.css';
import MotionProvider from './components/MotionProvider';
import LocomotiveProvider from './components/LocomotiveProvider';
import { sfProDisplay, gilroy, samsungSharpSans } from './lib/fonts';

export const metadata = {
  title: 'XƯỞNG ART PRODUCTION',
  description: 'Portfolio studio sản xuất video: TVC, Music Video, Documentary',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${sfProDisplay.variable} ${gilroy.variable} ${samsungSharpSans.variable} font-body bg-white text-black`}>
        <MotionProvider>
          <LocomotiveProvider>
            {children}
          </LocomotiveProvider>
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
            
            const loop=()=>{ 
              tx=lerp(tx,x,0.15); 
              ty=lerp(ty,y,0.15); 
              ring.style.transform='translate(' + tx + 'px, ' + ty + 'px)'; 
              raf=requestAnimationFrame(loop); 
            };
            loop();
            
            const addClass = (className) => { ring.classList.add(className); };
            const removeClass = (className) => { ring.classList.remove(className); };
            
                document.addEventListener('mouseover', (e)=>{ 
                  const t=e.target; 
                  if(t.closest('button, a, [data-cta]')) addClass('is-accent');
                  if(t.closest('[data-video], video')) addClass('is-video');
                  if(t.closest('h1, h2, h3, h4, h5, h6, p, span')) addClass('is-text');
                  if(t.closest('[data-project-card]')) addClass('is-project');
                });
                
                document.addEventListener('mouseout', (e)=>{ 
                  const t=e.target; 
                  if(t.closest('button, a, [data-cta]')) removeClass('is-accent');
                  if(t.closest('[data-video], video')) removeClass('is-video');
                  if(t.closest('h1, h2, h3, h4, h5, h6, p, span')) removeClass('is-text');
                  if(t.closest('[data-project-card]')) removeClass('is-project');
                });
          })();
        ` }} />
      </body>
    </html>
  );
}


