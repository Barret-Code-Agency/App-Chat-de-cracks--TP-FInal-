const StatusModal = () => {
    const { activeStatus, closeStatus } = useChat();

    if (!activeStatus) return null;

    return (
        <div className="status-overlay" onClick={closeStatus}>
            <button className="close-status">×</button>
            <div className="status-video-container" onClick={e => e.stopPropagation()}>
                <video src={activeStatus} autoPlay onEnded={closeStatus} />
            </div>
        </div>
    );
};