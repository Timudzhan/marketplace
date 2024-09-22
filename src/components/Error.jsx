function Error() {
    return(
        <div class="error-block">
            <div class="error-message">
                <p>Ошибка! Возможно сервер отключился, или не отвечает</p>
                <button>Обновить</button>
            </div>
        </div>
    );
}

export default Error;