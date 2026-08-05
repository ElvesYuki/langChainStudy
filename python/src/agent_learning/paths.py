from pathlib import Path


PYTHON_ROOT = Path(__file__).resolve().parents[2]
REPOSITORY_ROOT = PYTHON_ROOT.parent
DATA_ROOT = PYTHON_ROOT / "data"
ONE_FLOWER_DATA = DATA_ROOT / "one_flower"
OUTPUT_ROOT = PYTHON_ROOT / "outputs"

