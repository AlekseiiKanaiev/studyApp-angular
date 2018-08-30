/**при необходимости мы можем сами создавать какие-то свои
 * директивы атрибутов для каких-то определенных целей. */
/**Директива - это обычный класс на TS, к которому
 * применяется декоратор Directive, соответственно нам надо
 * импортировать эту директиву из "angular/core".
 * Кроме того, здесь импортируется класс "ElementRef".
 * Он представляет ссылку на элемент, к которому будет
 * применяться директива. */
import {
    Directive,
    ElementRef,
    Renderer2,
    HostListener,
    HostBinding,
    Input,
    OnInit
} from '@angular/core';

/**При применении декоратора @Directive необходимо
 * определить селектор CSS, с которым будет ассоциирована
 * директива. Селектор CSS для атрибута должен определяться
 * в квадратных скобках.
 * В данном случае в качестве селектора выступает [bold].
 * Сам декоратор @Directive применяется к классу, который
 * называется BoldDirective.
 * Это собственно и есть класс директивы, который определяет
 * ее логику. */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[bold]'
})
export class BoldDirective {
    /**Для получения элемента, к которому применяется данная
     * директива, в классе определен конструктор, имеющий
     * один параметр: private elementRef: ElementRef.
     * Через этот параметр Angular будет передавать или
     * инжектировать тот элемент из шаблона, в котором
     * применяется директива.
     * Поскольку параметр определен с ключевым словом private,
     * то для него будет создаваться одноименная приватная
     * переменная, через которую мы можем получить объект
     * ElementRef и произвести с ним какие-либо манипуляции. */
    constructor(private elementRef: ElementRef, private render: Renderer2) {
        /**здесь идет обращение к вложенному свойству
         * nativeElement, через которое у элемента
         * устанавливается жирный шрифт: */

        // this.elementRef.nativeElement.style.fontWeight = 'bold';

        /**Для управления стилизацией элемента выше этот
         * элемента извлекался через объект ElementRef
         * в конструкторе директивы, и у него устанавливались
         * стилевые свойства.
         * Однако гораздо удобнее для управления стилем
         * использовать рендерер.
         * Renderer2 представляет сервис, который также при
         * вызове директивы автоматически передается в ее
         * конструктор, и мы можем использовать данный сервис
         * для стилизации элемента.
         * А результат работы будет тот же, что и выше. */

        this.render.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    }

}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[mouseBold]'
})
export class MouseBoldDirective {
    constructor(private elementRef: ElementRef, private render: Renderer2) {

         this.render.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    }

    /**Декоратор @HostListener позволяет связать события DOM
     * и методы директивы.
     * В частности, в декоратор передается название события,
     * по которому будет вызываться метод.
     * В данном случае мы привязываем события
     * mouseenter (наведения указателя мыши на элемент) и
     * mouseleave (уведение указателя мыши с элемента)
     * к методу setFontWeight(), который устанавливает
     * стилевое свойство font-weight у элемента.
     * Если мы наводим на элемент, то устанавливается
     * выделение жирным.
     * При отводе мыши выделение сбрасывается. */
    @HostListener('mouseenter')
    onMouseEnter() {
        this.setFontWeight('bold');
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.setFontWeight('normal');
    }
    private setFontWeight(val: string): void {
        this.render.setStyle(this.elementRef.nativeElement, 'font-weight', val);
    }
}
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[mouseBindBold]'
})
export class MouseBindBoldDirective {
    private fontWeight = 'normal';

    /**Инструкция @HostBinding("style.fontWeight")
     *              get getFontWeight()
     * связывает со свойством "style.fontWeight" значение,
     * которое возвращается этим геттером getFontWeight.
     * А он возвращает значение свойства fontWeight,
     * которое также меняется при наведении указателя мыши. */
    @HostBinding('style.fontWeight')
    get getFontWeight(): string {
        return this.fontWeight;
    }

    @HostBinding('style.cursor')
    get getCursor(): string {
        return 'pointer';
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.fontWeight = 'bold';
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.fontWeight = 'normal';
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[boldHost]',
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldHostDirective {
    constructor(private elementRef: ElementRef, private render: Renderer2) {
        this.render.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    }

    onMouseEnter() {
        this.setFontWeight('bold');
    }
    onMouseLeave() {
        this.setFontWeight('normal');
    }
    private setFontWeight(val: string): void {
        this.render.setStyle(this.elementRef.nativeElement, 'font-weight', val);
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[boldInput]',
    // tslint:disable-next-line:use-host-property-decorator
})
export class BoldInputDirective implements OnInit {
    /** определяются два входных параметра.
     * Параметр selectedSize отвечает за высоту шрифта при
     * наведении мыши, а в параметр defaultSize устанавливает
     * высоту шрифта, когда указатель мыши находится вне
     * границ элемента.*/
    @Input() selectSize = '18px';
    @Input() defaultSize = '16px';

    /**Здесь в декоратор Input передается селектор
     * директивы - bold.
     * Поэтому чтобы установить этот параметр в шаблоне
     * компонента мы можем напрямую использовать имя
     * директивы */
    // tslint:disable-next-line:no-input-rename
    @Input('boldInput') selectWeight = 'bold';

    private fontSize: string;
    private fontWeight: string;

    /**Кроме того, чтобы задействовать значение defaultSize
     * при запуске приложения, реализуется метод ngOnInit. */
    ngOnInit () {
        this.fontSize = this.defaultSize;
        this.fontWeight = 'normal';
    }

    @HostBinding('style.fontSize')
    get getFontSize() {
        return this.fontSize;
    }

    @HostBinding('style.fontWeight')
    get getFontWeight() {
        return this.fontWeight;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.fontWeight = this.selectWeight;
        this.fontSize = this.selectSize;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.fontWeight = 'normal';
        this.fontSize = this.defaultSize;
    }
}
