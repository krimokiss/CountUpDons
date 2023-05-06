import { Component, OnInit } from '@angular/core';
import { CountUp } from 'countup.js'
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.scss']
})
export class DonsComponent implements OnInit {
  countUp1!: CountUp;
  countUp2!: CountUp;
  countUp3!: CountUp;
  endVal1 = 0;
  endVal2 = 0;
  endVal3 = 0;
  duration = 8;
  texte1 = 'Baraka Allahofikoum'
  texte2 = 'بارك الله فيكم'
  show: boolean = false;
  hidden: boolean = true


  ngOnInit(): void {
    this.countUp1 = new CountUp('targetId1', 0, { duration: this.duration, onCompleteCallback: this.celebrate, suffix: ' €', smartEasingThreshold: 1000 });
    this.countUp2 = new CountUp('targetId2', 0, { duration: this.duration, onCompleteCallback: this.celebrate, smartEasingThreshold: 1000, suffix: ' €' });

    this.countUp3 = new CountUp('targetId3', 0, {
      duration: this.duration,
      separator: '',
      suffix: ' euros',
      smartEasingThreshold: 1000,
      onCompleteCallback: function () {
        const texte1 = ((<HTMLElement>document.getElementById('thanks')))
        texte1.innerHTML = 'Baraka Allahofikoum';
        setTimeout(() => {
          texte1.innerHTML = ''

        }, 3000);
        const texte2 = ((<HTMLElement>document.getElementById('thanks2')))
        texte2.innerHTML = 'بارك الله فيكم';
        setTimeout(() => {
          texte2.innerHTML = ''

        }, 4000);
      }
    });
    // this.countUp3 = new CountUp('targetId3', 0, { duration: this.duration, separator: '', suffix: ' euros', smartEasingThreshold: 1000 });

    // if (!this.countUp3.error) {
    //   this.countUp3.start(() => {

    //     setTimeout(() => {
    //       this.hidden = false
    //     }, 1100);
    //   });
    // } else {
    //   console.error(this.countUp3.error);
    // }
  }

  increment1() {
    const value = Number((<HTMLInputElement>document.getElementById('increment-value1')).value);
    if (!isNaN(value)) {
      this.endVal1 += value;
      this.countUp1.update(this.endVal1);
      this.countUp1.start();
      this.updateCountUp3();
      this.hidden = false
      setTimeout(() => {
        this.hidden = true
      }, 8000);

    }
  }

  increment2() {
    const value = Number((<HTMLInputElement>document.getElementById('increment-value2')).value);
    if (!isNaN(value)) {
      this.endVal2 += value;
      this.countUp2.update(this.endVal2);
      this.countUp2.start();
      this.updateCountUp3();
      this.hidden = false
      setTimeout(() => {
        this.hidden = true
      }, 8000);

    }
  }

  onInputKeypress1(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.increment1();
    }
  }

  onInputKeypress2(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.increment2();
    }
  }

  updateCountUp3() {
    this.endVal3 = this.endVal1 + this.endVal2;
    this.countUp3.update(this.endVal3);
    this.countUp3.start();


  }

  celebrate() {

    confetti({
      particleCount: 400,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });
  }
}
