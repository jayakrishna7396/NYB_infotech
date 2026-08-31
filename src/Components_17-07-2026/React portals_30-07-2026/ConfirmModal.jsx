import Modal from "./Modal";

function ConfirmModal({
  closeConfirm,
  confirmDelete
}) {

  return (
    <Modal closeModal={closeConfirm}>

      <h2>Delete Item</h2>

      <p>
        Are you sure you want to delete this item?
      </p>

      <div className="button-group">

        <button>
          className="cancel-button"
          onClick={closeConfirm}
          Cancel
        </button>

        <button>
          className="delete-button"
          onClick={confirmDelete}
          Delete
        </button>

      </div>

    </Modal>
  );
}

export default ConfirmModal;