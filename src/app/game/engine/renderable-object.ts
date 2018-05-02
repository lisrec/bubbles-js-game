export default abstract class RenderableObject {
	public readonly id: number
	protected ctx: CanvasRenderingContext2D

	abstract render(): void
	abstract update(): void
}
