const Header = () => {
	return (
		<div>
			<h1>
				Todo App
			</h1>
			<form>
				<input
					aria-label="Agregar tarea"
					type="text"
					placeholder="Agregar tarea"
					required
				/>
				<button>Agregar Tarea</button>
			</form>
		</div>
	);
};

export {Header};