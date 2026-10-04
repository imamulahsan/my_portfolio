import {
  Component,
  HostListener,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cursorX = 0;
  cursorY = 0;

  cursorVisible = false;
  cursorInteractive = false;

  private lastTrailX = 0;
  private lastTrailY = 0;


  constructor(
    private renderer: Renderer2
  ) {}


  /* =========================================================
     Mouse Movement
  ========================================================= */

  @HostListener(
    'document:mousemove',
    ['$event']
  )
  onMouseMove(event: MouseEvent): void {

    this.cursorX = event.clientX;
    this.cursorY = event.clientY;

    this.cursorVisible = true;


    const target =
      event.target as HTMLElement | null;


    this.cursorInteractive = !!target?.closest(
      'a, button, [role="button"]'
    );


    /* ---------------------------------------------------------
       Create trail only after mouse moved a few pixels
    --------------------------------------------------------- */

    const distanceX =
      event.clientX - this.lastTrailX;

    const distanceY =
      event.clientY - this.lastTrailY;

    const distance =
      Math.sqrt(
        distanceX * distanceX +
        distanceY * distanceY
      );


    if (distance > 8) {

      this.createTrailParticle(
        event.clientX,
        event.clientY
      );

      this.lastTrailX =
        event.clientX;

      this.lastTrailY =
        event.clientY;
    }

  }


  /* =========================================================
     Create Trail Particle
  ========================================================= */

  private createTrailParticle(
    x: number,
    y: number
  ): void {

    const particle =
      this.renderer.createElement('span');


    this.renderer.addClass(
      particle,
      'cursor-trail-particle'
    );


    this.renderer.setStyle(
      particle,
      'left',
      `${x}px`
    );


    this.renderer.setStyle(
      particle,
      'top',
      `${y}px`
    );


    this.renderer.appendChild(
      document.body,
      particle
    );


    setTimeout(() => {

      if (particle.parentNode) {

        this.renderer.removeChild(
          document.body,
          particle
        );

      }

    }, 650);

  }


  /* =========================================================
     Mouse Leaves Window
  ========================================================= */

  @HostListener('document:mouseleave')
  onMouseLeave(): void {

    this.cursorVisible = false;
    this.cursorInteractive = false;

  }

}
