input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 1363, 2684, 255, 255, 3500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSoundExpression(WaveShape.Sine, 2684, 1363, 255, 255, 3500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})
