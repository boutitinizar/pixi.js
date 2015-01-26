/**
 * @file        Main export of the PIXI filters library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    AsciiFilter:        require('./ascii/AsciiFilter'),
    BloomFilter:        require('./bloom/BloomFilter'),
    BlurFilter:         require('./blur/BlurFilter'),
    BlurXFilter:        require('./blur/BlurXFilter'),
    BlurYFilter:        require('./blur/BlurYFilter'),
    ColorMatrixFilter:  require('./color/ColorMatrixFilter'),
    ColorStepFilter:    require('./color/ColorStepFilter'),
    ConvolutionFilter:  require('./convolution/ConvolutionFilter'),
    CrossHatchFilter:   require('./crosshatch/CrossHatchFilter'),
    DisplacementFilter: require('./displacement/DisplacementFilter'),
    DotScreenFilter:    require('./dot/DotScreenFilter'),
    GrayFilter:         require('./gray/GrayFilter'),
    InvertFilter:       require('./invert/InvertFilter'),
    NoiseFilter:        require('./noise/NoiseFilter'),
    NormalMapFilter:    require('./normal/NormalMapFilter'),
    PixelateFilter:     require('./pixelate/PixelateFilter'),
    RGBSplitFilter:     require('./rgb/RGBSplitFilter'),
    ShockwaveFilter:    require('./shockwave/ShockwaveFilter'),
    SepiaFilter:        require('./sepia/SepiaFilter'),
    SmartBlurFilter:    require('./blur/SmartBlurFilter'),
    TiltShiftFilter:    require('./tiltshift/TiltShiftFilter'),
    TiltShiftXFilter:   require('./tiltshift/TiltShiftXFilter'),
    TiltShiftYFilter:   require('./tiltshift/TiltShiftYFilter'),
    TwistFilter:        require('./twist/TwistFilter')
};
